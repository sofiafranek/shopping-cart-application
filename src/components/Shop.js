import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

import { getProducts } from "../../pages//api/getProducts";
import { getCategories } from "../../pages//api/getCategories";
import { getProductsMatchingQuery } from "../../pages/api/getProductsMatchingQuery";

import BREAKPOINTS from "../styles/breakpoints";

import ProductCard from "./Product/Card";
import Categories from "./Categories";
import Pagination from "./Pagination";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const AllProducts = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 50px 0 0;

  ${BREAKPOINTS.min.small`
    margin: 0;
    justify-content: start;
  `}
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;

  ${BREAKPOINTS.min.small`
    flex-direction: row;
  `}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${BREAKPOINTS.min.small`
    flex-direction: row;
  `}
`;

const Products = styled.div`
  width: 100%;
`;

const HeadingOne = styled.h1`
  margin-bottom: 20px;

  ${BREAKPOINTS.min.small`
    margin-bottom: 40px;
  `}
`;

const HeadingThree = styled.h3``;

const Underline = styled.span`
  display: block;
  width: 100%;
  border: 1px solid black;
  margin-bottom: 0;

  ${BREAKPOINTS.min.small`
    width: 300px;
    margin-bottom: 100px;
  `}

  ${BREAKPOINTS.min.medium`
    width: 400px;
  `}
`;

const Search = styled.input`
  width: 300px;
  padding: 10px 20px;
  border-radius: 20px;
  margin: 30px 0 0;

  ${BREAKPOINTS.min.small`
    margin: 15px 0 0;
  `}
`;

const StyledImage = styled(Image)`
  margin: auto;
  animation: ${rotation} 20s infinite linear;
`;

const Shop = () => {
  const [allProducts, setAllProducts] = React.useState([]);
  const [allCategories, setAllCategories] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchData();
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const fetchData = () => {
    setPage(0);
    getProducts()
      .then((products) => {
        setAllProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });

    getCategories()
      .then((categories) => {
        setAllCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateQuery = (event) => {
    setPage(0);
    getProductsMatchingQuery(event.target.value)
      .then((products) => {
        setAllProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header>
        <span>
          <HeadingOne>All products</HeadingOne>
          <Underline />
        </span>
        <Search
          placeholder="Search for a product..."
          onChange={(e) => updateQuery(e)}
        />
      </Header>
      <Container>
        <Categories
          allCategories={allCategories}
          setAllProducts={setAllProducts}
        />
        <Products>
          <AllProducts>
            {loading ? (
              <StyledImage
                src="/images/loading.png"
                alt=""
                width="150"
                height="150"
              />
            ) : (
              allProducts.products.map((product) => {
                return <ProductCard key={product.id} {...product} />;
              })
            )}
          </AllProducts>
          {!loading &&
            (allProducts.total === allProducts.skip ? (
              <HeadingThree>
                Wow! There's no more products. Try searching or clicking a
                category.
              </HeadingThree>
            ) : (
              allProducts.total > 20 && (
                <Pagination
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  page={page}
                  setPage={setPage}
                />
              )
            ))}
        </Products>
      </Container>
    </>
  );
};

export default Shop;
