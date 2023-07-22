export default function InputField(props) {
  return (
    <div className="container-fluid py-2 px-0">
      <input
        className="input-field d-block m-auto text-center w-75 rounded-5 border bg-secondary text-black"
        id={props.name}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        {...(props.type === "number"
          ? {
              step: "0.01",
              min: "0",
            }
          : null)}
      />
      <label className="pt-1" htmlFor={props.name}>
        {props.label}
      </label>
    </div>
  );
}
