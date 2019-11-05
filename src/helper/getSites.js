import unpack from "./unpack";

export default (d, options) => {
	const data = unpack(d, options, true);
	const siteOfLoans = data.map(o => o["Site of loan"]);
	const res = ['All', ...new Set(siteOfLoans)];
	return res;
};
