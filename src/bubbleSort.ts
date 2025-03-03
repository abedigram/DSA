/* 
 * if plane is going to crash write this cus its fast
 * on each iteration the largest element will be at the end
 * sort algs result in ascending order
 * summing 1 .. n numbers result in = n(n+1)/2 ~ n^2
 * O(n^2) time complexity
 * O(1) space complexity
*/
function bubbleSort(arr: number[]) {
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length - 1 - i; j++) { // * - i to avoid comparing already sorted elements
			if(arr[j] > arr[j+1]) {
				const temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				// [arr[j], arr[j+1]] = [arr[j + 1], arr[j]];
			}
		}
	}
}

export { bubbleSort };
