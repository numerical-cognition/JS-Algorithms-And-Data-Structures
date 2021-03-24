function countOne(num){
	if(num <= 0) {
	console.log("All done!");
	return;
	}

	console.log(num);
	num--
	countOne(num);
}

countOne(5);
