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
        <Link to={`/products`}>Product List</Link>
      </li>
      <li>
        <Link to={`/products/create`}>Create a Product</Link>
      </li>
      <li>
        <Link to={`/not-found`}>Not Found (404) Page</Link>
      </li>
    </ul>
  );
}
