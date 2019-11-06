import unpack from "./unpack";
import fixSelectedSites from './fixSelectedSites'

export default (d, options) => {
	const data = unpack(d, options, true);
	const siteOfLoans = data.map(o => o["Site of loan"]);
	const fixedSites = fixSelectedSites(siteOfLoans);
	const res = ['All', ...new Set(fixedSites)];
	return res;
};
