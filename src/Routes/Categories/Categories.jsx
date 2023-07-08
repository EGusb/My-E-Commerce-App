import useCategories from "./functions/queries";
import Error from "../../Components/Error";
import Loader from "../../Components/Loader";

export default function Categories() {
  const { data: categories, error, isLoading, isError, isSuccess } = useCategories();

  return (
    <>
      <h1>Categories</h1>
      <div>
        {isLoading && <Loader />}
        {isError && <Error error={error} />}
        {isSuccess &&
          categories.map((cat) => {
            return <p key={cat.id}>{cat.name}</p>;
          })}
      </div>
    </>
  );
}
