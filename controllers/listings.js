const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  try {
    let search = req.query.search || "";
    let category = req.query.category || "";
    let allListings = [];

    if (category !== "") {
      allListings = await Listing.find({ category });
    } else if (search !== "") {
      allListings = await Listing.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "owner",
            foreignField: "_id",
            as: "result",
          },
        },
        {
          $match: {
            $or: [
              { title: { $regex: `\\b${search}`, $options: "i" } },
              { location: { $regex: `\\b${search}`, $options: "i" } },
              { country: { $regex: `\\b${search}`, $options: "i" } },
              { "result.username": { $regex: `\\b${search}`, $options: "i" } },
              { category: { $regex: `\\b${search}`, $options: "i" } },
            ],
          },
        },
      ]);

      if (allListings.length === 0) {
        req.flash("error", "No matching listings found.");
        return res.redirect("/listings");
      }
    } else {
      allListings = await Listing.find({});
    }

    res.render("listings/index.ejs", { allListings });
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong.");
    res.redirect("/listings");
  }
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  try {
    let { id } = req.params;
    let listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");

    if (!listing) {
      req.flash("error", "The listing you requested does not exist.");
      return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong.");
    res.redirect("/listings");
  }
};

module.exports.createListing = async (req, res, next) => {
  try {
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;

    if (req.file) {
      newListing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    // Default geometry values
    newListing.geometry = {
      type: "Point",
      coordinates: [0, 0],
    };

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  } catch (err) {
    console.error(err);
    req.flash("error", "Failed to create a new listing.");
    res.redirect("/listings/new");
  }
};

module.exports.renderEditForm = async (req, res) => {
  try {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing) {
      req.flash("error", "The listing you requested does not exist.");
      return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong.");
    res.redirect("/listings");
  }
};

module.exports.updateListing = async (req, res) => {
  try {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (req.file) {
      listing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    // Ensure geometry field is set if missing
    if (!listing.geometry) {
      listing.geometry = {
        type: "Point",
        coordinates: [0, 0],
      };
    }

    await listing.save();
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Failed to update the listing.");
    res.redirect(`/listings/${id}/edit`);
  }
};

module.exports.destroyListing = async (req, res) => {
  try {
    let { id } = req.params;
    let deleted = await Listing.findByIdAndDelete(id);

    if (deleted) {
      req.flash("success", "Listing Deleted!");
    } else {
      req.flash("error", "The listing could not be found.");
    }

    res.redirect("/listings");
  } catch (err) {
    console.error(err);
    req.flash("error", "Failed to delete the listing.");
    res.redirect("/listings");
  }
};
