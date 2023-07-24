function OptionField({ value, content }) {
  return <option value={value}>{content}</option>;
}

function SelectField(props) {
  return (
    <div className="container-fluid py-2 px-0">
      <select
        className="form-select d-block m-auto text-center w-75 rounded-5 border bg-secondary text-black"
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      >
        {props.children}
      </select>
      <label className="pt-1" htmlFor={props.name}>
        {props.label}
      </label>
    </div>
  );
}

SelectField.Option = OptionField;

export default SelectField;
