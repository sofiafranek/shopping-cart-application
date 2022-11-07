import React from "react";
import styled from "styled-components";
import Image from "next/image";

import TYPO from "../../styles/typography";
import COLORS from "../../styles/colors";
import BREAKPOINTS from "../../styles/breakpoints";

import useBlockScroll from "../../hooks/useBlockScroll";
import UpdateCart from "../../hooks/updateCart";

import tidyUpCateogry from "../../helpers/tidyCategory";

const Container = styled.section`
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  max-height: 80vh;
  overflow: scroll;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: ${COLORS.white};
  border: 2px solid ${COLORS.black};
  border-radius: 20px;
  padding: 50px;
  width: 90%;

  ${BREAKPOINTS.min.small`
    width: 75%;
  `}
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 30px;
`;

const Close = styled.div`
  ${TYPO.h3};
  cursor: pointer;
  position: absolute;
  top: -40px;
  right: -30px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const PriceTag = styled.div`
  ${TYPO.h3}
  position: absolute;
  padding: 30px;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  top: 0px;
  right: 0;
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  transition: 0.5s;
  border: 2px solid ${COLORS.black};

  :hover {
    color: ${COLORS.black};
    background-color: ${COLORS.white};
    transform: rotate(20deg);
  }
`;

const HeadingOne = styled.h1`
  display: flex;
  align-items: center;
  padding-right: 120px;
`;

const HeadingTwo = styled.h2`
  margin: 0 0 15px;
`;

const HeadingFour = styled.h4`
  margin: 0 0 20px;
`;

const Message = styled.h5`
  display: inline;
  text-decoration: underline;
  padding-left: 20px;
`;

const Button = styled.button``;

const StyledImage = styled(Image)`
  border-radius: 20px;
`;

const Tag = styled.span`
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Category = styled.span`
  ${TYPO.h5};
  display: block;
  border: 1px solid black;
  padding: 5px;
  width: fit-content;
  margin: 0 0 20px;
`;

const ProductModal = (props) => {
  const { addItem } = UpdateCart();
  const [success, setSuccess] = React.useState(false);

  const addItemToCart = () => {
    addItem(props);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const { title, brand, category, description, images, price } = props;

  // prevents scrolling of window when modal is open
  useBlockScroll(props.isShowing);

  return (
    <Container>
      <Content>
        <Close onClick={props.hide}>x</Close>
        <PriceTag>
          <Tag>£{price}</Tag>
        </PriceTag>
        <HeadingOne>{title}</HeadingOne>
        <HeadingTwo>{brand}</HeadingTwo>
        <Category>{tidyUpCateogry(category)}</Category>
        <HeadingFour>{description}</HeadingFour>
        <Button onClick={() => addItemToCart()}>Add to cart</Button>
        {success && <Message>Item added to your cart!</Message>}
      </Content>
      <ImageWrapper>
        {images.map((image, idx) => {
          return (
            <StyledImage
              src={image}
              alt=""
              key={idx}
              width="1000"
              height="1000"
              layout="responsive"
            />
          );
        })}
      </ImageWrapper>
    </Container>
  );
};

export default ProductModal;
