import d3Tip from "d3-tip";

const html = (k, v) => {
	return `<p class='tt'>${k}: ${v}</p>`;
};

const tipHtml = d => {
	const keys = Object.keys(d);
	let res = "";
	keys.forEach(key => {
		const val = d[key];
		res += html(key, val);
	});
	return res;
};

const tip = d3Tip()
	.attr("class", "d3-tip")
	.html(d => {
		const res = tipHtml(d);
		return res;
	});

export default tip;
