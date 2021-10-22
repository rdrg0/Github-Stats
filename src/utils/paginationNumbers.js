export default function getPageNumbers(max, current) {
  const num = current - 2;
  let initialPage;
  let lastPage = max - 4 > 1 ? max - 4 : max;
  let totalPages = max > 5 ? 5 : max;

  if (num <= 1) {
    initialPage = 1;
  } else if (num >= lastPage) {
    initialPage = lastPage;
  } else {
    initialPage = num;
  }

  const lastIdx = totalPages - 1;
  return [...Array(totalPages).keys()].map((idx) => {
    if (lastIdx + initialPage > lastPage) {
      return idx + 1;
    } else {
      return idx + initialPage;
    }
  });
}
