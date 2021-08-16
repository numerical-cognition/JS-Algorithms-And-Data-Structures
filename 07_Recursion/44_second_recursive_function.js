function countDown(num) {
	if(num === 1) return 1;
	return num + countDown(num - 1);
}

console.log(countDown(4));
