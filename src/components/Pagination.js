import styled from "@emotion/styled";
import chevronLeft from "../assets/chevron_left.svg";
import chevronRight from "../assets/chevron_right.svg";
import { Link } from "react-router-dom";
import getPageNumbers from "../utils/paginationNumbers";

const Container = styled.nav`
  display: flex;
  gap: 4px;
  margin: auto;
`;

const PageNumber = styled.div`
  text-align: center;
  color: #4f4f4f;
  border-radius: 50px;
  padding: 0.5px 2px;
`;

const Selected = styled(PageNumber)`
  color: white;
  background-color: #2d9cdb;
  padding: 0.5px 6px;
`;

export default function Pagination({ total, limit, currentPage, pathName }) {
  const pages = Math.ceil(total / limit);
  const pagesArray = getPageNumbers(pages, currentPage);

  const PreviousPage = () => {
    if (pages > 1 && currentPage > 1) {
      return (
        <Link to={`${pathName}?page=${currentPage - 1}`}>
          <img src={chevronLeft} alt="" />
        </Link>
      );
    } else {
      return <img src={chevronLeft} alt="" />;
    }
  };

  const NextPage = () => {
    if (pages > 1 && currentPage < pages) {
      return (
        <Link to={`${pathName}?page=${currentPage + 1}`}>
          <img src={chevronRight} alt="" />
        </Link>
      );
    } else {
      return <img src={chevronRight} alt="" />;
    }
  };

  return (
    <Container>
      <PreviousPage />
      {pagesArray.map((pageNum) => {
        if (pageNum === currentPage) {
          return (
            <Selected key={pageNum}>
              <Link to={`${pathName}?page=${pageNum}`}>{pageNum}</Link>
            </Selected>
          );
        } else {
          return (
            <PageNumber key={pageNum}>
              <Link to={`${pathName}?page=${pageNum}`}>{pageNum}</Link>
            </PageNumber>
          );
        }
      })}
      <NextPage />
    </Container>
  );
}
