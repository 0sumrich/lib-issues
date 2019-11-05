import React from 'react';
import MultiSelect from './multiSelect';

const LocalAuthority = ({ options, onChange }) => (
  <MultiSelect
    options={options}
    className="select-wrapper"
    defaultValue={options[0]}
    placeholderButtonLabel={"Local authority"}
    onChange={onChange}
  />
);

export default LocalAuthority;