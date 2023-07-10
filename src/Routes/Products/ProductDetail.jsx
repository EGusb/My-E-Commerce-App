import Error from "../../Components/Error";
import Loader from "../../Components/Loader";
import Detail from "./Components/Detail";
import { getProductDetail } from "../../Functions/queries";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, error, isLoading, isError, isSuccess } = getProductDetail(id);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error error={error} />}
      {isSuccess && <Detail product={product} />}
    </>
  );
}
