export default function parseQuery(query) {
  const pageNumber = Number(query.replace("?page=", ""));

  if (isNaN(pageNumber) || pageNumber < 1) {
    return false;
  } else {
    return pageNumber;
  }
}
