import React from "react";
import Select from "./select";

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
