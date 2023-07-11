export default function Error(props) {
  return (
    <div>
      <h1>ERROR: {props.error.message}</h1>
    </div>
  );
}
