import Category from "./components/Category";
import { getCategories } from "../../Functions/queries";
import Error from "../../Components/Error";
import Loader from "../../Components/Loader";

export default function Categories() {
  const { data: categories, error, isLoading, isError, isSuccess } = getCategories();

  return (
    <>
      <h1>Categories</h1>
      <div className="container-fluid text-center">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 row-cols-sm-2">
          {isLoading && <Loader />}
          {isError && <Error error={error} />}
          {isSuccess &&
            categories.map((cat) => {
              return <Category key={cat.id} id={cat.id} name={cat.name} image={cat.image} />;
            })}
        </div>
      </div>
    </>
  );
}
