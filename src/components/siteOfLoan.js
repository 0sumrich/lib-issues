import React from "react";
import MultiSelect from "./multiSelect";

const SiteOfLoan = ({ options, onChange }) => (
  <MultiSelect
    options={options}
    className="select-wrapper"
    defaultValue={options[0]}
    placeholderButtonLabel={"Site of Loan"}
    onChange={onChange}
  />
);

export default SiteOfLoan;
