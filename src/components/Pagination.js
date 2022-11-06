import React from "react";
import styled from "styled-components";

import { getPage } from "../../pages/api/getPage";

import COLORS from "../styles/colors";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  button:disabled,
  button[disabled] {
    background: ${COLORS.brown};
  }
`;

const Pagination = ({ allProducts, setAllProducts, page, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = (currentPage) => {
    scrollTop();
    setTimeout(() => {
      getPage(currentPage)
        .then((products) => {
          setAllProducts(products);
          setPage(page + 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);
  };

  const lastPage = (currentPage) => {
    scrollTop();
    setTimeout(() => {
      getPage(currentPage)
        .then((products) => {
          setAllProducts(products);
          setPage(page - 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);
  };

  return (
    <Container>
      <button onClick={() => lastPage(page - 1)} disabled={page === 0}>
        Last page
      </button>
      <button
        onClick={() => nextPage(page + 1)}
        disabled={allProducts.total / 20 === page}
      >
        Next page
      </button>
    </Container>
  );
};

export default Pagination;
