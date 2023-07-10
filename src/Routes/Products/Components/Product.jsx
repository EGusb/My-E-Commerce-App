import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { id, title, price, images, category } = product;
  const [firstImage] = images;

  // placeimg.com doesn't work, change it to picsum.photos
  const imageURL = firstImage === "https://placeimg.com/640/480/any" ? "https://picsum.photos/640/640" : firstImage;

  return (
    <div className="col p-2">
      <Link to={`/products/${id}`}>
        <div className="card h-100 rounded-5">
          <img src={imageURL} alt="..." className="p-2 rounded-5 h-75" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-title text-start">${price}</h6>
            <h6 className="card-title text-start">
              Category: {category.id}. {category.name}
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
