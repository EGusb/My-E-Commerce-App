import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "./Context/ProductsContext";
import ProductList from "./Components/ProductList";
import ProductFilter from "./Components/ProductFilter";
import "./Components/styles.css";

export default function Products() {
  const defaultOrderObj = { field: "title", asc: 1 };
  const [state, setState] = useState(useLocation().state || {});
  const [order, setOrder] = useState(defaultOrderObj);

  return (
    <ProductsContext.Provider value={{ state, setState, order, setOrder, defaultOrderObj }}>
      <main className="container-fluid">
        <h1>Products</h1>
        <div className="row">
          <ProductFilter />
          <ProductList />
        </div>
      </main>
    </ProductsContext.Provider>
  );
}
