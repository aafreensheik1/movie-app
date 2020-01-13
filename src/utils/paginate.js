import _ from "lodash";
export function paginate(allMovies, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  return _(allMovies)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
