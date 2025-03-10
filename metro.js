if (typeof readline === "function") {
	const s1 = readline().split(" ");
	const s2 = readline().split(" ");
	const res = metro(s1, s2);
	console.log(res);
} else {
	console.log(
		metro(`1 1 0 1 0 0 1 1`.split(" "), `1 1 0 0 0 1 0 1`.split(" "))
	);
}

function metro(seat1, seat2) {
	let res = 0;
	for (let i = 0; i < seat1.length; i++) {
		if (seat1[i] == 1 && seat2[i] == 1) {
			res++;
		}
	}
	return res;
}
