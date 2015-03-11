Tracker.wrap = function (fn) {
	return function () {
		Tracker.autorun(fn.bind(this));
	}
};
