import { getCategories } from "../../../Functions/queries";
import { useState } from "react";
import InputField from "./InputField";
import objectRemoveBlankValues from "../../../Functions/objectRemoveBlankValues";
import "./styles.css";

export default function ProductFilter(props) {
  const { state, setState, order, setOrder, defaultOrderObj } = props;
  const { data: categories, isSuccess } = getCategories();

  const defaultFilterObj = {
    categoryId: state?.categoryId || "",
    title: state?.title || "",
    price: state?.price || "",
    price_min: state?.price_min || "",
    price_max: state?.price_max || "",
  };
  const [filterObj, setFilterObj] = useState(defaultFilterObj);
  const [orderObj, setOrderObj] = useState(order);

  function handleOrderByChange({ target: { value } }) {
    setOrderObj({
      field: value.split("-")[0],
      asc: value.split("-")[1] === "asc" ? 1 : -1,
    });
  }

  function handleChange({ target: { name, value } }) {
    setFilterObj((prevObj) => {
      return { ...prevObj, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setOrder(orderObj);
    setState(objectRemoveBlankValues(filterObj));
  }

  function handleReset(event) {
    event.preventDefault();
    setFilterObj({
      categoryId: "",
      title: "",
      price: "",
      price_min: "",
      price_max: "",
    });
    setOrderObj(defaultOrderObj);
  }

  return (
    <aside className="col-2 position-fixed mt-4 border rounded-5 py-3">
      <div className="sidebar">
        <h1 className="py-2">Filters</h1>
        <form id="filterForm" className="filter-form text-center" onSubmit={handleSubmit} onReset={handleReset}>
          <div className="container-fluid py-2 px-0">
            <select
              className="form-select d-block m-auto text-center w-100 rounded-5 border bg-secondary text-black"
              key="orderBy"
              id="orderBy"
              name="orderBy"
              onChange={handleOrderByChange}
              value={`${orderObj.field}-${orderObj.asc === 1 ? "asc" : "desc"}`}
            >
              <option key="opt-1" value="title-asc">
                Title: A-Z
              </option>
              <option key="opt-2" value="title-desc">
                Title: Z-A
              </option>
              <option key="opt-3" value="price-asc">
                Price: Low to High
              </option>
              <option key="opt-4" value="price-desc">
                Price: High to Low
              </option>
            </select>
            <label className="pt-1" htmlFor="orderBy">
              Order By
            </label>
          </div>

          <div className="container-fluid py-2 px-0">
            <select
              className="form-select d-block m-auto text-center w-75 rounded-5 border bg-secondary text-black"
              key="categoryId"
              id="categoryId"
              name="categoryId"
              onChange={handleChange}
              value={filterObj.categoryId}
            >
              <option key="allCategories" value="" className="text-center">
                All Categories
              </option>
              {isSuccess &&
                categories.map((cat) => {
                  return (
                    <option key={cat.id} value={cat.id}>
                      {cat.id}. {cat.name}
                    </option>
                  );
                })}
            </select>
            <label className="pt-1" htmlFor="categoryId">
              Category
            </label>
          </div>

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
            <div className="row w-75 mx-auto pb-1 pt-3">
              <button type="submit" className="btn btn-primary col border">
                Apply filter
              </button>
            </div>
            <div className="row w-75 mx-auto pt-1 pb-3">
              <button type="reset" className="btn btn-danger col border">
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </aside>
  );
}
