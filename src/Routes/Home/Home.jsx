import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ul>
      <li>
        <Link to={`/cart-detail`}>Cart Detail</Link>
      </li>
      <li>
        <Link to={`/categories`}>Categories</Link>
      </li>
      <li>
        <Link to={`/login`}>Login Page</Link>
      </li>
      <li>
        <Link to={`/products`}>Product List</Link>
      </li>
      <li>
        <Link to={`/products/57`}>Product Detail</Link>
      </li>
      <li>
        <Link to={`/products/create`}>Create a Product</Link>
      </li>
      <li>
        <Link to={`/products/edit/39`}>Edit Product</Link>
      </li>
      <li>
        <Link to={`/register`}>Register Page</Link>
      </li>
      <li>
        <Link to={`/not-found`}>Not Found (404) Page</Link>
      </li>
    </ul>
  );
}
