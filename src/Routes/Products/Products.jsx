import { useLocation } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductFilter from "./Components/ProductFilter";
import "./Components/styles.css";
import { useState } from "react";

export default function Products() {
  const [state, setState] = useState(useLocation().state || {});

  return (
    <>
      <h1>Products</h1>
      <div className="container-fluid">
        <div className="row">
          <ProductFilter state={state} setState={setState} />
          <ProductList state={state} />
        </div>
      </div>
    </>
  );
}
