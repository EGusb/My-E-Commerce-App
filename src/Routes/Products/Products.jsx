import { useLocation } from "react-router-dom";
import ProductList from "./Components/ProductList";

export default function Products() {
  const search = useLocation().search; // i.e.: '?categoryId=4&price=820'

  return (
    <>
      <h1>Products</h1>
      <ProductList search={search} />
    </>
  );
}
