import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { id, title, price, description, images, category } = product;
  console.log(product);
  const [firstImage] = images;

  // placeimg.com doesn't work, change it to picsum.photos
  const imageURL = firstImage === "https://placeimg.com/640/480/any" ? "https://picsum.photos/640/640" : firstImage;

  return (
    <div className="col p-2">
      <div className="card h-100 rounded-5">
        <img src={imageURL} alt="..." className="p-2 rounded-5 h-75" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-title">${price}</h6>
          <Link to={`/products/${id}`} className="btn btn-dark">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}
