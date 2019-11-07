import { selectAll } from "d3-selection";

function wrap(text, width) {
  const words = text
    .text()
    .split(/\s+/)
    .reverse();
  let word = "";
  let line = [];
  let lineNumber = 0;
  const lineHeight = 1.1; // ems
  const y = text.attr("y");
  const dy = +text.attr("dy").slice(0, -3);
  let fontSize = 1;
  let tspan = text
    .text(null)
    .append("tspan")
    .attr("x", 0)
    .attr("y", y)
    .attr("dy", dy + "em");
  while ((word = words.pop())) {
    line.push(word);
    tspan.text(line.join(" "));
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
      function fontSizeFix() {
        if (tspan.node().getComputedTextLength() > width) {
          fontSize = 0.99 * fontSize;
          selectAll(".x-axis-text").style("font-size", `${fontSize}em`);
          fontSizeFix();
        } else {
          return;
        }
      }
      fontSizeFix();
    }
  }
}

export default wrap;
