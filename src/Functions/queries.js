import { URL_PRODUCTS, QUERY_KEY_PRODUCTS, URL_CATEGORIES, QUERY_KEY_CATEGORIES } from "../Constants/constants";
import { useQuery } from "react-query";

// To export something as default and not get the error
export default null;

export function getCategories() {
  const query = useQuery(QUERY_KEY_CATEGORIES, async () => {
    const res = await fetch(URL_CATEGORIES);
    const json = await res.json();

    if (json.error) {
      throw new Error(json.error);
    }

    return json;
  });
  return query;
}

export function getProducts(queryParamsString) {
  const query = useQuery(QUERY_KEY_PRODUCTS, async () => {
    const urlFetch = queryParamsString ? URL_PRODUCTS + "?" + queryParamsString : URL_PRODUCTS;
    const res = await fetch(urlFetch);
    const json = await res.json();

    if (json.error) {
      throw new Error(json.error);
    }

    return json;
  });
  return query;
}
