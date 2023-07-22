export default function FilterForm(props) {
  return (
    <aside className="col-2 position-fixed mt-4 border rounded-5 py-3">
      <div className="sidebar">
        <h1 className="py-2">{props.title}</h1>
        <form id={props.id} className="filter-form text-center" onSubmit={props.onSubmit} onReset={props.onReset}>
          {props.children}

          <div className="container-fluid">
            <div className="row w-75 mx-auto pb-1 pt-3">
              <button form={props.id} type="submit" className="btn btn-primary col border">
                Apply filter
              </button>
            </div>
            <div className="row w-75 mx-auto pt-1 pb-3">
              <button form={props.id} type="reset" className="btn btn-danger col border">
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </aside>
  );
}
