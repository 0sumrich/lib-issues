import React from "react";
import Select from "./select";

const concatDates = arr => arr.map(o => o.start + " - " + o.end);

const Dates = ({ dates, onChange }) => {
  const options = concatDates(dates);
  return (
    <Select
      options={options}
      className="select-wrapper"
      defaultValue={options[0]}
      placeholderButtonLabel={"Date Range"}
      onChange={onChange}
    />
  );
};

export default Dates;
