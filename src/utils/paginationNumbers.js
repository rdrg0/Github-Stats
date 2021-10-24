export default function getPageNumbers(max, current) {
  const num = current - 2;
  let initialPage;
  let lastPage = current + 2 >= max ? max : current + 2;
  let totalPages = max > 5 ? 5 : max;

  if (num <= 1) {
    initialPage = 1;
    lastPage = 5;
  } else {
    initialPage = num;
  }

  return [...Array(totalPages).keys()].map((idx) => {
    if (totalPages + initialPage > lastPage) {
      return idx + lastPage - 4;
    } else {
      return idx + initialPage;
    }
  });
}
