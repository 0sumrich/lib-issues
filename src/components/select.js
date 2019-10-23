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
import React from 'react'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
 
// ...
const options = [
  { label: 'Thing 1', value: 1},
  { label: 'Thing 2', value: 2},
];

<ReactMultiSelectCheckboxes options={options} />
