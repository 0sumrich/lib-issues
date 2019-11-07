export default arr => {
	const fix = str => {
		const i = str.indexOf("(");
		if (i === -1) {
			return str;
		} else {
			return str.slice(0, i - 1);
		}
	};

	return arr.map(x => fix(x));
};
