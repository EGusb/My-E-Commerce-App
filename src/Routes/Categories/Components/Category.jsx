import { Link } from "react-router-dom";

export default function Category(props) {
  const { id, name, image } = props;
  // placeimg.com doesn't work, change it to picsum.photos
  const imageURL = image === "https://placeimg.com/640/480/any" ? "https://picsum.photos/640/640" : image;

  return (
    <div className="col p-2">
      <div className="card h-100 rounded-5">
        <img src={imageURL} alt="..." className="p-2 rounded-5 h-75" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link to={`/products`} state={{ categoryId: id }} className="btn btn-dark">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
