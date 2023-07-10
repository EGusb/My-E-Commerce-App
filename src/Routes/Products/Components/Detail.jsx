import "./styles.css";

export default function Detail({ product }) {
  const { id, title, price, images, category, description, creationAt, updatedAt } = product;

  return (
    <div className="col py-3 px-5 mx-5">
      <div className="card h-100 rounded-5">
        <div className="card-body">
          <h1 className="card-title py-2 text-center">{title} </h1>
          <h3 className="card-title text-start py-2">Price: ${price}</h3>
          <h3 className="card-title text-start py-2">Category: {category.name}</h3>
          <h5 className="card-title text-start pt-4 py-2 text-decoration-underline">Description:</h5>
          <h5 className="card-title text-start pt-2">{description}</h5>
          <div className="img-container row py-4">
            {images.map((img) => (
              <img key={img} src={img} alt="..." className="img-detail p-1 rounded-5" />
            ))}
          </div>
          <div className="card-footer text-center pt-4">
            <h6 className="card-title">Product ID: {id}</h6>
            <h6 className="card-title">Created at: {creationAt}</h6>
            <h6 className="card-title">Updated at: {updatedAt}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
