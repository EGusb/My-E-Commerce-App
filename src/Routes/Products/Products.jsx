import { useSearchParams } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductFilter from "./Components/ProductFilter";
import "./Components/styles.css";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h1>Products</h1>
      <div className="container-fluid">
        <div className="row">
          <ProductFilter searchParams={searchParams} setSearchParams={setSearchParams} />
          <ProductList searchParams={searchParams} />
        </div>
      </div>
    </>
  );
}
