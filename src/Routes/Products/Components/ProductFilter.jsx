import { useLocation } from "react-router-dom";

export default function ProductFilter(props) {
  const { setFilter } = props;
  const search = useLocation().search; // i.e.: '?categoryId=4&price=820'
  setFilter(search);

  return (
    <div className="bg-secondary position-relative col-2 p-4">
      <h1 className="position-fixed">Filtro</h1>
    </div>
  );
}
