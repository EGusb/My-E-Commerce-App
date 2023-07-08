import { URL_CATEGORIES, QUERY_KEY_CATEGORIES } from "../../../Constants/constants";
import { useQuery } from "react-query";

export default function useCategories() {
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
