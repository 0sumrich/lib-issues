import * as d3 from "d3";
import unpack from "./unpack";
import wrap from "./wrap";

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

  // const x = d3
  //   .scaleLinear()
  //   .range([0, width])
  //   .domain([0, data.length]);

  const xWidth = x.bandwidth();

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

  // chart
  //   .selectAll(".bar")
  //   .data(data)
  //   .enter()
  //   .append("rect")
  //   .attr("class", "bar")
  //   .attr("x", d => x(d["Site of loan"]))
  //   .attr("width", x.bandwidth())
  //   .attr("y", d => y(d.Issues))
  //   .attr("height", d => height - y(d.Issues))
  //   .style("fill", (d, i) => colours[i % colours.length])
  //   .on("mouseover", d => console.log(d));

  chart
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d["Site of loan"]))
    .attr("width", xWidth)
    .attr("y", d => y(d.Issues))
    .attr("height", d => height - y(d.Issues))
    .style("fill", (d, i) => colours[i % colours.length])
    .on("mouseover", d => console.log(d));

  // add the x Axis

  const xAxis = d3.axisBottom(x).tickValues(data.map(o => o["Site of loan"]));

  chart
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis)
    .each(function() {
      d3.select(this)
        .selectAll(".tick text")
        .each(function() {
          wrap(d3.select(this), xWidth);
        });
    });

  chart.append("g").call(d3.axisLeft(y));
}

export default draw;
