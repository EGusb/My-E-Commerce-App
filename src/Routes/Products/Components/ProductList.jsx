import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../../Functions/queries";
import { ProductsContext } from "../Context/ProductsContext";
import { useSearchParams } from "react-router-dom";
import Error from "../../../Components/Error";
import Loader from "../../../Components/Loader";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { order, state } = useContext(ProductsContext);
  const [searchParams, setSearchParams] = useSearchParams(state);
  const { data: products, error, isLoading, isError, isSuccess } = getProducts(searchParams.toString());
  const [sortedProducts, setSortedProducts] = useState(products || []);

  useEffect(() => {
    setSearchParams(state);
  }, [state, setSearchParams]);

  useEffect(() => {
    products &&
      setSortedProducts(products.toSorted((a, b) => (a[order.field] > b[order.field] ? order.asc : -order.asc)));
  }, [products, setSortedProducts, order]);

  return (
    <>
      <div className="col-2"></div>
      <main className="col-10 p-4">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-sm-2">
          {isLoading && <Loader />}
          {isError && <Error error={error} />}
          {isSuccess &&
            sortedProducts.map((prod) => {
              return <ProductCard key={prod.id} product={prod} />;
            })}
        </div>
      </main>
    </>
  );
}
