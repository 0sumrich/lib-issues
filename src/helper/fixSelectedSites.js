export default arr => {
	const fix = str => {
		const i = str.indexOf("(");
		if (i === -1) {
			return str;
		} else {
			const res = str.slice(0, i - 1);
			debugger;
			return res;
		}
	};

	return arr.map(x => fix(x));
};
