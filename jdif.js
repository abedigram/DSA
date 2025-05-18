function isValidString(str: string): boolean {
	const map: { [key: string]: string } = {
		"(": ")",
		"[": "]",
	};

	const stack = [];

	for (const char of str) {
		if (Object.keys(map).indexOf(char) >= 0) {
			stack.push(char);
		} else {
			const opening = stack.pop() ?? "";
			if (map[opening] !== char) {
				return false;
			}
		}
	}

	return !stack.length;
}

function missBinary(arr: number[], target: number) {
	let start = 0;
	let end = arr.length - 1;

	while (true) {
		const mid = Math.floor((start + end) / 2);
		console.log(mid, arr[mid]);
		if (arr[mid] === target) return mid;
		else if (start === end) return -1;
		else if (arr[mid] > arr[end]) {
			if (target >= arr[start] && target <= arr[mid]) {
				end = mid - 1;
				console.log("end", end);
				continue;
			} else {
				console.log("start", start);

				start = mid;
				continue;
			}
		} else if (arr[mid] <= arr[start]) {
			if (target >= arr[mid] && target <= arr[end]) {
				start = mid + 1;
			} else {
				end = mid;
				continue;
			}
		}
	}
}
