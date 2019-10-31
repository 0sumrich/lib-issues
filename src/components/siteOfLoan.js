import React from "react";
import Select from "./select";
import selectAllClick from "../helper/selectAllClick";
import { unique, getUniqueValues } from "../helper/getUniqueValues";

  const handleLoanSiteChange = arr => {
    const selected = selectAllClick(arr).map(x => x.value);
    const start = uniqueValues["Count start"][0];
    const end = uniqueValues["Count end"][0];
    const filtered = filterByDate(data, start, end);
    const summed = sumAll(filtered);
    if (selected.includes("All")) {
      draw(summed);
    } else {
      draw(summed.filter(o => selected.includes(o["Site of loan"])));
    }
  };

const SiteOfLoan = ({ options, onChange }) => (
  <Select
    options={options}
    className="select-wrapper"
    defaultValue={options[0]}
    placeholderButtonLabel={"Site of Loan"}
    onChange={onChange}
  />
);

export default SiteOfLoan;
