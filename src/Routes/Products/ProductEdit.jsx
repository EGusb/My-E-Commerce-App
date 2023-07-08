import { useParams } from "react-router-dom";

export default function ProductEdit() {
  const { id } = useParams();
  
  return <h1>Edit Product #{id}</h1>;
}
