import React from "react";

const Option = ({ children }) => <option>{children}</option>;

export default ({ options, id, multiple }) => (
  <div className="pure-form">
    <select id={id} className="pure-input-1-2 select" multiple={multiple}>
      {options.map(option => (
        <Option key={option}>{option}</Option>
      ))}
    </select>
  </div>
);
