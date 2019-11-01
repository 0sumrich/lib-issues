import * as d3 from "d3";
import wrap from "./wrap";

function unpack(d, options) {
  const { localAuthorities, dates, siteOfLoans } = options;
  let res = [];
  localAuthorities.forEach(la => {
    const LAindex = d.map(o => o["Local authority"]).indexOf(la);
    const datesIndex = d[LAindex].values.map(o => o.Dates).indexOf(dates);
    const siteFilter = o => {
      return (
        siteOfLoans.includes(o["Site of loan"]) || siteOfLoans.includes("All")
      );
    };
    const data = d[LAindex].values[datesIndex].values.filter(siteFilter);
    res.push(...data);
  });
  return res;
}

function draw(d, options) {
  const data = unpack(d, options);

  d3.select("#chart")
    .selectAll("*")
    .remove();

  const margin = { top: 30, right: 30, bottom: 50, left: 40 };
  const width = 1000 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;
  const colours = d3.schemeCategory10;

  const x = d3
    .scaleBand()
    .range([0, width])
    .domain(data.map(o => o["Site of loan"]))
    .padding(0.1);
  const y = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data.map(o => o.Issues))]);

  const chart = d3
    .select("#chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  chart
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d["Site of loan"]))
    .attr("width", x.bandwidth())
    .attr("y", d => y(d.Issues))
    .attr("height", d => height - y(d.Issues))
    .style("fill", (d, i) => colours[i % colours.length]);

  // add the x Axis
  chart
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .each(function() {
      d3.select(this)
        .selectAll(".tick text")
        .each(function() {
          wrap(d3.select(this), x.bandwidth() - 10);
        });
    });

  chart.append("g").call(d3.axisLeft(y));
}

export default draw;
