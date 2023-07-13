import ProductCard from "./ProductCard";
import { getProducts } from "../../../Functions/queries";
import Error from "../../../Components/Error";
import Loader from "../../../Components/Loader";

export default function ProductList(props) {
  const { search } = props; // i.e.: '?categoryId=4&price=820'
  const { data: products, error, isLoading, isError, isSuccess } = getProducts(search);

  return (
    <div className="container-fluid p-4">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 row-cols-sm-2">
        {isLoading && <Loader />}
        {isError && <Error error={error} />}
        {isSuccess &&
          products.map((prod) => {
            return <ProductCard key={prod.id} product={prod} />;
          })}
      </div>
    </div>
  );
}
