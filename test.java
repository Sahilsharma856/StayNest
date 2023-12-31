import java.util.Arrays;

public class test {
    static void get(int i, int n, int[] ar, int k) {
        if(n<1 || n<k) return;

        if(i == 3) {
            ar[3] = n;
            System.out.println(Arrays.toString(ar));
            return;
        }

        for(int j=k; j<n; j++) {
            ar[i] = j;
            get(i+1, n-j, ar, j);
            ar[i] = 0;
        } 
    }
    public static void main(String[] args) {
        int n = 6;
        System.out.println("target: "+n);
        get(0, n, new int[4], 1);
    }

}