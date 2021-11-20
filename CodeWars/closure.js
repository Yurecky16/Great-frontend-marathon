function buildFun(n) {

	var res = []

	for (var i = 0; i < n; i++) {
		(function () {
			var j = i;
			res.push(function () { return j; });
		})();
	};
	return res
}