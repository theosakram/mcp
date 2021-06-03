const twoSums = (arr, target) => {
	const filteredArr = arr.filter((x) => x <= target);

	for (let i = 0; i < filteredArr.length; i++) {
		const idx = filteredArr.findIndex((x) => x === target - arr[i]);
		const condition = idx !== -1 && idx !== i;

		if (condition) {
			return [i, idx].sort();
		}
	}

	return "Tidak ditemukan";
};

console.log(twoSums([2, 7, 11, 15], 13));
console.log(twoSums([3, 2, 4], 6));
console.log(twoSums([3, 3], 6));
