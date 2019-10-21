import * as d3 from "d3";

function draw(data) {
  const margin = { top: 30, right: 50, bottom: 60, left: 70 };
  const width = 950 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;
  const colours = d3.schemeSet3()
  const x = d3
    .scaleBand()
    .range([0, width])
    .domain(data.map(o => o["Site of loan"]));
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
    .attr("height", d => height - y(d.Issues));

  // add the x Axis
  chart
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // add the y Axis
  chart.append("g").call(d3.axisLeft(y));

  // 	chart.call(tip);
}

export default draw;
