package java_first_project;
import java.util.Scanner;
import java.util.InputMismatchException;


public class ExceptionPrac {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner scan = new Scanner(System.in);
		
		int size = 0;
		try {
			System.out.print("배열 크기를 입력하십시오 ");
			size = scan.nextInt();
		} catch (InputMismatchException e) {
			System.out.print("숫자를 입력하십시오 ");
		}
		
		int[] array = new int[size];
		
		
		try {
			System.out.println("배열 요소를 입력하십시오");
			for (int i = 0; i <size; i++) {
				array[i] = scan.nextInt();
			}
			
			int sum = 0;
			for( int value: array) {
				sum += value;
			}
			
			double avg = sum/array.length;
			System.out.printf("평균은 %.2f", avg);
			
		} catch(InputMismatchException e) {
			System.out.println("숫자를 입력하세요 ");
		}
		
		for( int i = 0; i < size; i++) {
			array[i] = scan.nextInt();
		}
		
		
	}

}
