const fixDups = arr => {
  const siteOfLoans = arr.map(o => o["Site of loan"]);
  const unique = [...new Set(siteOfLoans)];
  unique.forEach(site => {
    const dups = siteOfLoans.filter(x => x === site).length;
    if (dups > 1) {
      for (let i = 0; i < dups; i++) {
        const currSites = arr.map(o => o["Site of loan"]);
        const arrayIndex = currSites.indexOf(site);
        arr[arrayIndex]["Site of loan"] = `${site} (${i + 1})`;
      }
    }
  });
  return arr;
};

function unpack(d, options, filt=false) {
  const { localAuthorities, dates, siteOfLoans } = options;
  let res = [];
  localAuthorities.forEach(la => {
    const LAindex = d.map(o => o["Local authority"]).indexOf(la);
    dates.forEach(date => {
      const datesIndex = d[LAindex].values.map(o => o.Dates).indexOf(date);
      const siteFilter = o => {
        return (
          siteOfLoans.includes(o["Site of loan"]) || siteOfLoans.includes("All")
        );
      };
      const data = filt
        ? d[LAindex].values[datesIndex].values.map(o => {
            return { ...o, date: date, "Local authority": la };
          })
        : d[LAindex].values[datesIndex].values.filter(siteFilter).map(o => {
            return { ...o, date: date, "Local authority": la };
          });
      res.push(...data);
    });
  });
  return fixDups(res);
}

export default unpack;
