function buildFun(n) {

	var res = []

	for (var i = 0; i < n; i++) {
		let j = i;
		res.push(function () {
			return j;
		})
	}
	return res
}

let test = buildFun(10);
console.log(test)