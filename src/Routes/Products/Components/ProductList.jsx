import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProducts } from "../../../Functions/queries";
import Error from "../../../Components/Error";
import Loader from "../../../Components/Loader";
import { useEffect } from "react";

function getUrlStringFromObject(obj) {
  // Remove keys from filterObj which are falsy
  // eslint-disable-next-line no-unused-vars
  const newFilterObj = Object.fromEntries(Object.entries(obj).filter(([_, v]) => Boolean(v)));
  return new URLSearchParams(newFilterObj).toString();
}

export default function ProductList(props) {
  const { state } = props;

  const [searchParams, setSearchParams] = useSearchParams(getUrlStringFromObject(state));
  const { data: products, error, isLoading, isError, isSuccess } = getProducts(searchParams.toString());

  useEffect(() => {
    setSearchParams(getUrlStringFromObject(state));
  }, [state, setSearchParams]);

  return (
    <>
      <div className="col-2"></div>
      <main className="col-10 p-4">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-sm-2">
          {isLoading && <Loader />}
          {isError && <Error error={error} />}
          {isSuccess &&
            products.map((prod) => {
              return <ProductCard key={prod.id} product={prod} />;
            })}
        </div>
      </main>
    </>
  );
}
