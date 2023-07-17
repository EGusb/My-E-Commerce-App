import { useEffect, useState } from "react";
import InputField from "./InputField";
import "./styles.css";

export default function ProductFilter(props) {
  const { searchParams, setSearchParams } = props;

  const defaultFilterObj = {
    categoryId: "",
    title: "",
    price: "",
    price_min: "",
    price_max: "",
  };

  const [filterObj, setFilterObj] = useState(defaultFilterObj);

  function handleChange({ target: { name, value } }) {
    setFilterObj((prevObj) => {
      return { ...prevObj, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Remove keys from filterObj which are falsy
    // eslint-disable-next-line no-unused-vars
    const newFilterObj = Object.fromEntries(Object.entries(filterObj).filter(([_, v]) => Boolean(v)));
    const searchString = new URLSearchParams(newFilterObj).toString();
    setSearchParams(searchString);
  }

  // Load URL parameter values into filter
  useEffect(
    () =>
      setFilterObj({
        categoryId: searchParams.get("categoryId") || "",
        title: searchParams.get("title") || "",
        price: searchParams.get("price") || "",
        price_min: searchParams.get("price_min") || "",
        price_max: searchParams.get("price_max") || "",
      }),
    [searchParams]
  );

  return (
    <aside className="col-2 position-fixed mt-4 border rounded-5 py-3">
      <div className="sidebar">
        <h1 className="py-2">Filters</h1>
        <form className="filter-form text-center" onSubmit={handleSubmit}>
          <InputField
            key="categoryId"
            id="categoryId"
            name="categoryId"
            type="number"
            placeholder="Category ID"
            onChange={handleChange}
            value={filterObj.categoryId}
            step="1"
            min="0"
          />
          <InputField
            key="price"
            id="price"
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            value={filterObj.price}
            step="0.01"
            min="0"
          />
          <InputField
            key="price_min"
            id="price_min"
            name="price_min"
            type="number"
            placeholder="Minimum price"
            onChange={handleChange}
            value={filterObj.price_min}
            step="0.01"
            min="0"
          />

          <InputField
            key="price_max"
            id="price_max"
            name="price_max"
            type="number"
            placeholder="Maximum price"
            onChange={handleChange}
            value={filterObj.price_max}
            step="0.01"
            min="0"
          />

          <InputField
            key="title"
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={filterObj.title}
          />

          <div className="container-fluid">
            <div className="row w-50 mx-auto pb-1 pt-3">
              <button type="submit" className="btn btn-primary col border">
                Apply filter
              </button>
            </div>
            <div className="row w-50 mx-auto pt-1 pb-3">
              <button type="reset" className="btn btn-danger col border" onClick={() => setFilterObj(defaultFilterObj)}>
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </aside>
  );
}
