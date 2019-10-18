import React, { Fragment, useState, useEffect } from "react";
import Svg from "./svg";
import getUniqueValues from "../helper/getUniqueValues";
import Select from "./select";

// Data object keys from csv
// Local authority,
// Site of loan,
// Count start,
// Count end,
// Type,
// Book,
// Issues

// let unique = [...new Set(myArray)];
//total loans by site

const Chart = ({ data }) => {
  const [drawData, setData] = useState(data);
  debugger;
  const uniqueValues = getUniqueValues(drawData);
  return (
    <Fragment>
      <Select options={uniqueValues["Site of loan"]} />
      <Svg id="chart" />
    </Fragment>
  );
};

export default Chart;
