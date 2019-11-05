import React from "react";
import MultiSelect from "./multiSelect";

const Dates = ({ dates, onChange }) => {
  return (
    <MultiSelect
      options={dates}
      className="select-wrapper"
      defaultValue={dates[0]}
      placeholderButtonLabel={"Date Range"}
      onChange={onChange}
    />
  );
};

export default Dates;
