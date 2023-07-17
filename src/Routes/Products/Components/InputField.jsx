export default function InputField(props) {
  return (
    <div className="container-fluid py-3 px-0">
      <input
        className="input-field d-block m-auto text-center w-75 rounded-5 border bg-secondary text-black"
        {...props}
      />
      <label className="pt-1" htmlFor={props.id}>
        {props.placeholder}
      </label>
    </div>
  );
}
