import React from "react";
const Option = ({ children }) => <option>{children}</option>;

export default ({ options, id }) => (
  <select id={id} className="pure-input-1-2">
    {options.map(option => (
      <Option key={option}>{option}</Option>
    ))}
  </select>
);