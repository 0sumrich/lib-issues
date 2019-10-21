import * as d3 from "d3";

function draw(data) {
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
      const text = d3
        .select(this)
        .selectAll(".tick text")
        .each(function() {
          const text = d3.select(this);
          const words = text
            .text()
            .split(/\s+/)
            .reverse();
          const width = x.bandwidth()-10;
          let word = "";
          let line = [];
          let lineNumber = 0;
          const lineHeight = 1.1; // ems
          const y = text.attr("y");
          const dy = +text.attr('dy').slice(0, -3)
          let tspan = text
            .text(null)
            .append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dy", dy + "em");
          while (word=words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            debugger;
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text
                .append("tspan")
                .attr("x", 0)
                .attr("y", y)
                .attr("dy", ++lineNumber * lineHeight + dy + "em")
                .text(word);
            }
          }
        });
    });

  chart.append("g").call(d3.axisLeft(y));
}

export default draw;
