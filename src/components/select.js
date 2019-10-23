// import React from "react";

// const Option = ({ children }) => <option>{children}</option>;

// export default ({ options, id, multiple }) => (
//   <div className="pure-form">
//     <select id={id} className="pure-input-1-2 select" multiple={multiple}>
//       {options.map(option => (
//         <Option key={option}>{option}</Option>
//       ))}
//     </select>
//   </div>
// );
import React from "react";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import "../style/select.css";

const createOptions = (label, value) => {
  return { label, value };
};

export default ({ options, id }) => {
  const optionsArray = options.map(s => createOptions(s, s));
  return (
    <div className="select-wrapper">
      <ReactMultiSelectCheckboxes options={optionsArray} />
    </div>
  );
};
