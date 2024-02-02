# WanderHome

WanderHome is an Airbnb-inspired web application developed using Node.js, Express.js, EJS, and MongoDB. It is the part of a web development course I did. It allows users to search for accommodations, list properties and review the properties. there is no booking functionality implimented yet.

## Live Demo

A live demo of WanderHome can be accessed [here](https://airbnb-neet-wanderhome.onrender.com/listings).

## Features

- **Search Functionality**: Users can search for accommodations based on various criteria such as location, dates, and amenities.
- **Category-Based Listing**: Accommodations are categorized for easy browsing and filtering.
- **User Authentication**: Secure user authentication system ensures that only registered users can access certain features like listing properties and booking accommodations.
- **CRUD Operations**: MongoDB and Mongoose are used for efficient CRUD (Create, Read, Update, Delete) operations via API endpoints.
- **Server-Side Validation**: Joi library is integrated for server-side validation to ensure data schema.
- **Server-Side Rendering**: EJS is used for rendering the page server-side and sending it to the user.
- **Image Storage**: Cloudinary API is utilized for image storage, allowing users to upload images of their properties.
- **Responsive Design**: The application is fully responsive, and well suited for mobile view too.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript)
- MongoDB
- Bootstrap
- HTML
- CSS
- JavaScript

## Other Dependencies

- Cloudainary
- Connect-flash
- dotenv
- joi
- method-override
- multer
- nodemon
- passport
  
## Installation

To run WanderHome locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up your MongoDB Atlas cluster and obtain your connection string.
5. Create a `.env` file in the root directory and add your MongoDB Atlas connection string and Cloudinary API credentials.
   it should include: CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET, MAP_TOKEN, ATLASDB_URL and a SECRET (to encrypt passwords).
7. Run the application using `node app.js`. (make sure you are in project directory)
8. Access the application in your web browser at `http://localhost:8000`.

## Screenshots

![image](https://github.com/NEET64/Airbnb-clone-wanderhome/assets/67575976/ed9a40e7-5276-43a1-8646-9cae2882952c)
![image](https://github.com/NEET64/Airbnb-clone-wanderhome/assets/67575976/3db049f6-8f97-4e87-82e3-c91ca3831d9f)
![image](https://github.com/NEET64/Airbnb-clone-wanderhome/assets/67575976/c7e0dbb5-ac80-4cb7-ad6a-6d99d42c66ab)
![image](https://github.com/NEET64/Airbnb-clone-wanderhome/assets/67575976/52a64492-7a2e-4df1-b6eb-823e16137b8e)
![image](https://github.com/NEET64/Airbnb-clone-wanderhome/assets/67575976/c66ff76d-0cf3-41f8-a4ac-a3b539b46737)


## Video Demonstration

(https://youtu.be/6OvXJ6w9Xmc)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
