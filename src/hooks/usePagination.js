import { Redirect, useLocation } from "react-router";
import parseQuery from "../utils/queryParser";

export default function usePagination() {
  const location = useLocation();
  const pathName = location.pathname;
  const query = location.search;
  const pageNumber = parseQuery(query);

  if (query && !pageNumber) {
    alert("Invalid page query!");
    return <Redirect to="/" />;
  }

  const currentPage = pageNumber || 1;
  return [pathName, currentPage];
}
