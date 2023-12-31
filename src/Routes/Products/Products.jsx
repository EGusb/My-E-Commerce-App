import { useLocation } from "react-router-dom";
import Product from "./Components/Product";
import { getProducts } from "../../Functions/queries";
import Error from "../../Components/Error";
import Loader from "../../Components/Loader";
import { useState } from "react";

export default function Products() {
  const search = useLocation().search; // i.e.: '?categoryId=4&price=820'
  const [filter, setFilter] = useState(search);
  const { data: products, error, isLoading, isError, isSuccess } = getProducts(filter);

  filter !== search && setFilter(search);

  return (
    <>
      <h1>Products</h1>
      <div className="container-fluid text-center p-4">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 row-cols-sm-2">
          {isLoading && <Loader />}
          {isError && <Error error={error} />}
          {isSuccess &&
            products.map((prod) => {
              return <Product key={prod.id} product={prod} />;
            })}
        </div>
      </div>
    </>
  );
}
