export default (data, LAs) => {
  let res = [];
  const dataLAs = data.map(o => o["Local authority"]);
  for (let i = 0; i < LAs.length; i++) {
    const la = LAs[i];
    const target = data[dataLAs.indexOf(la)];
    target.values.forEach(o => res.push(o.Dates));
  }
  return res;
};
