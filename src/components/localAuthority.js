import React from 'react';
import Select from './select';

const LocalAuthority = ({ options, onChange }) => (
  <Select
    options={options}
    className="select-wrapper"
    defaultValue={options[0]}
    placeholderButtonLabel={"Local authority"}
    onChange={onChange}
  />
);

export default LocalAuthority;