import * as d3 from "d3";
import unpack from "./unpack";
import wrap from "./wrap";
import tip from "./tooltip";

function draw(d, options) {
  const data = unpack(d, options);
  d3.select("#chart")
    .selectAll("*")
    .remove();

  const margin = { top: 40, right: 10, bottom: 90, left: 70 };
  const width = 1000 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;
  const colours = d3.schemeCategory10;

  const x = d3
    .scaleBand()
    .range([0, width])
    .domain(data.map(o => o["Site of loan"]))
    .padding(0.1);

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

  chart.call(tip);

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
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);

  const xAxis = d3.axisBottom(x); //.tickValues(data.map(o => o["Site of loan"]));

  chart
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis)
    .each(function() {
      d3.select(this)
        .selectAll(".tick text")
        .classed('x-axis-text', true)
        .each(function() {
          wrap(d3.select(this), xWidth);
        });
    });

  chart.append("g").call(d3.axisLeft(y));

  chart
    .append("text")
    .attr("class", "legend")
    .attr(
      "transform",
      `translate(${width / 2}, ${height + margin.bottom - 20})`
    )
    .attr("alignment-baseline", "middle")
    .style("text-anchor", "middle")
    .text("Site of loan");

  chart
    .append("text")
    .attr("class", "legend")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 5)
    .attr("x", 0 - height / 2)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Loans + renewals in a timeframe");

  chart
    .append("text")
    .attr("class", "chart-title")
    .attr("y", 0-0.25*margin.top)
    .attr("x", width / 2)
    .style("text-anchor", "middle")
    .text("Issues + Renewals by Loan Site");
  
  // const ticktext = d3.selectAll('.tick text').each(function(){
  //   const text = d3.select(this);
  //   debugger;
  // })
  // const tspans = d3.selectAll('.tick text tspan')
  // debugger;
}

export default draw;
