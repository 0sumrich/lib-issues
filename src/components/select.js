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

const createOptions = (label, value) => {
  return { label, value };
};

export default ({ options, id, className, defaultValue, onChange }) => {
  const createOptions = (label, value) => {
    return { label, value };
  };
  
  const opts = options.map(s => createOptions(s, s))
  
  return (
    <div className={className}>
      <ReactMultiSelectCheckboxes
        options={opts}
        defaultValue={createOptions(defaultValue, defaultValue)}
        onChange={onChange}
      />
    </div>
  );
};
