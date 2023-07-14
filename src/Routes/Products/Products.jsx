import { useState } from "react";
import ProductList from "./Components/ProductList";
import ProductFilter from "./Components/ProductFilter";

export default function Products() {
  const [filter, setFilter] = useState("");

  return (
    <>
      <h1>Products</h1>
      <div className="container-fluid">
        <div className="row">
          <ProductFilter setFilter={setFilter} />
          <ProductList filter={filter} />
        </div>
      </div>
    </>
  );
}
