import { useLocation } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductFilter from "./Components/ProductFilter";
import "./Components/styles.css";
import { useState } from "react";

export default function Products() {
  const defaultOrderObj = { field: "title", asc: 1 };
  const [state, setState] = useState(useLocation().state || {});
  const [order, setOrder] = useState(defaultOrderObj);

  return (
    <>
      <h1>Products</h1>
      <div className="container-fluid">
        <div className="row">
          <ProductFilter
            state={state}
            setState={setState}
            order={order}
            setOrder={setOrder}
            defaultOrderObj={defaultOrderObj}
          />
          <ProductList state={state} order={order} />
        </div>
      </div>
    </>
  );
}
