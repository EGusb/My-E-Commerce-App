import { getCategories } from "../../../Functions/queries";
import { useState, useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import FilterForm from "./FilterForm";
import InputField from "./InputField";
import SelectField from "./SelectField";
import objectRemoveBlankValues from "../../../Functions/objectRemoveBlankValues";
import "./styles.css";

export default function ProductFilter() {
  const { state, setState, order, setOrder, defaultOrderObj } = useContext(ProductsContext);
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
    <FilterForm id="filterForm" title="Filters" onSubmit={handleSubmit} onReset={handleReset}>
      <SelectField
        name="orderBy"
        value={`${orderObj.field}-${orderObj.asc === 1 ? "asc" : "desc"}`}
        onChange={handleOrderByChange}
        label="Order By"
      >
        <SelectField.Option value="title-asc" content="Title: A-Z" />
        <SelectField.Option value="title-desc" content="Title: Z-A" />
        <SelectField.Option value="price-asc" content="Price: Low to High" />
        <SelectField.Option value="price-desc" content="Price: High to Low" />
      </SelectField>

      <SelectField name="categoryId" onChange={handleChange} value={`${filterObj.categoryId}`} label="Category">
        <SelectField.Option key="allCategories" value="" content="All Categories" />
        {isSuccess &&
          categories.map((cat) => {
            return <SelectField.Option key={cat.id} value={cat.id} content={`${cat.id}. ${cat.name}`} />;
          })}
      </SelectField>

      <InputField name="price" type="number" onChange={handleChange} value={filterObj.price} label="Price" />

      <InputField
        name="price_min"
        type="number"
        onChange={handleChange}
        value={filterObj.price_min}
        label="Minimum price"
      />

      <InputField
        name="price_max"
        type="number"
        onChange={handleChange}
        value={filterObj.price_max}
        label="Maximum price"
      />

      <InputField name="title" type="text" onChange={handleChange} value={filterObj.title} label="Title" />
    </FilterForm>
  );
}
