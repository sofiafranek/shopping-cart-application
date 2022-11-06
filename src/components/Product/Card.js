import React from "react";
import styled from "styled-components";
import Image from "next/image";

import BREAKPOINTS from "../../styles/breakpoints";

import useModal from "../../hooks/useModal";

import ProductModal from "./Modal";

const StyledImage = styled(Image)`
  border-radius: 20px;
  transition: 0.5s;
`;

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  margin: 0 0 50px 0;

  ${BREAKPOINTS.min.medium`
    width: 45%;
    margin: 0 25px 100px 0;
  `}

  ${BREAKPOINTS.min.large`
    width: 30%;
  `}
`;

const HeadingThree = styled.h3`
  margin: 10px 0;
`;

const HeadingFour = styled.h4``;

const ProductCard = (props) => {
  const { isShowing, toggle } = useModal();

  const { title, price, thumbnail } = props;

  return (
    <>
      <Container onClick={toggle}>
        <StyledImage
          src={thumbnail}
          alt=""
          width="500"
          height="500"
          layout="responsive"
        />
        <HeadingThree>{title}</HeadingThree>
        <HeadingFour>£{price}</HeadingFour>
      </Container>
      {isShowing && (
        <ProductModal {...props} isShowing={isShowing} hide={toggle} />
      )}
    </>
  );
};

export default ProductCard;
