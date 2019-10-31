import Select from './select'

const createOptions = (label, value) => {
  return { label, value };
};

const Dates = ({dates, onChange}) => 
(<Select
    options={options}
    className="select-wrapper"
    defaultValue={options[0]}
    placeholderButtonLabel={"Site of Loan"}
    onChange={onChange}
  />
 );

export default Dates;