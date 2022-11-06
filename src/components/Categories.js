import React from "react";
import styled from "styled-components";

import { getProducts } from "../../pages//api/getProducts";
import { getProductsFromCategory } from "../../pages//api/getProductsFromCategory";

import BREAKPOINTS from "../styles/breakpoints";
import COLORS from "../styles/colors";

import tidyUpCateogry from "../helpers/tidyCategory";

const Container = styled.div`
  display: none;

  ${BREAKPOINTS.min.small`
  display: block;
    min-width: 300px;
  `}

  ${BREAKPOINTS.min.medium`
    min-width: 425px;
  `}
`;

const HeadingTwo = styled.h2`
  margin-bottom: 25px;

  ${BREAKPOINTS.min.small`
    margin-bottom: 50px;
  `}
`;

const HeadingFive = styled.h5`
  margin-bottom: 20px;
  cursor: pointer;
`;

const Categories = ({ allCategories, setAllProducts }) => {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const setFilter = (category) => {
    if (category === "all") {
      getProducts()
        .then((products) => {
          setAllProducts(products);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getProductsFromCategory(category)
        .then((products) => {
          setAllProducts(products);
          setActiveCategory(category);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <Container>
      <HeadingTwo>Categories</HeadingTwo>
      <HeadingFive
        onClick={() => setFilter("all")}
        style={{
          color: activeCategory === "all" ? COLORS.brown : COLORS.black
        }}
      >
        All
      </HeadingFive>
      {allCategories.map((category) => {
        return (
          <HeadingFive
            onClick={() => setFilter(category)}
            style={{
              color: activeCategory === category ? COLORS.brown : COLORS.black
            }}
            key={category}
          >
            {tidyUpCateogry(category)}
          </HeadingFive>
        );
      })}
    </Container>
  );
};

export default Categories;
