import React from "react";
import styled from "styled-components";
import Image from "next/image";

import BREAKPOINTS from "../styles/breakpoints";
import COLORS from "../styles/colors";

import useBlockScroll from "../hooks/useBlockScroll";
import UpdateCart from "../hooks/updateCart";

const Container = styled.div`
  position: fixed;
  z-index: 2;
  padding: 20px 30px;
  border-left: 1px solid ${COLORS.black};
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  background: ${COLORS.white};
  color: ${COLORS.black};
  overflow-y: auto;
  overflow-x: hidden;

  ${BREAKPOINTS.min.small`
    width: 500px;
    padding: 20px 60px;
  `}

  ${BREAKPOINTS.min.medium`
    width: 700px;
  `}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 60px 0 30px;
`;

const Item = styled.div`
  border-bottom: 1px solid ${COLORS.black};
  padding: 30px 0;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin: 0 0 20px;

  ${BREAKPOINTS.min.medium`
    height: 300px;
  `}
`;

const EmptyCart = styled.div`
  margin: 60px 0 0;
  border-bottom: 1px solid ${COLORS.black};
  padding: 30px 0;
`;

const ButtonContainer = styled.div`
  margin: 20px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeadingTwo = styled.h2`
  padding: 60px 0 0;
`;

const HeadingThree = styled.h3``;

const AlternativeButton = styled.button`
  background: ${COLORS.black};
  color: ${COLORS.white};

  :hover {
    background: ${COLORS.white};
    color: ${COLORS.black};
  }
`;

const Message = styled.p`
  margin: 10px 0;
  text-transform: uppercase;
`;

const Button = styled.button``;

const Span = styled.span`
  margin: 0 10px;
`;

const Form = styled.form`
  margin: 0 0 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px 20px;
  border-radius: 20px;
  margin: 0 0 30px;

  ${BREAKPOINTS.min.small`
    margin: 0 10px 15px 0;
  `}
`;

const Cart = ({ toggle, setToggle }) => {
  const { cart, updateItem, removeItem } = UpdateCart();
  const [discountCode, setDiscountCode] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);

  // prevents scrolling of window when modal is open
  useBlockScroll(toggle);

  const totalPrice = cart.reduce(
    (total, item) => parseFloat(total + item.price * item.quantity).toFixed(2),
    0
  );

  const discountTotal = cart.reduce(
    (total, item) =>
      parseFloat(
        total + (item.price / 100) * item.discountPercentage * item.quantity
      ).toFixed(2),
    0
  );

  const applyDiscountCode = (e) => {
    e.preventDefault();

    const discountCode = document.getElementById("discount").value;

    if (discountCode === "DISCOUNT") {
      setDiscountCode(true);
      setErrorMessage(false);
    } else {
      setDiscountCode(false);
      setErrorMessage(true);
    }
  };

  return (
    <Container>
      <Header>
        <HeadingTwo>Cart</HeadingTwo>
        <AlternativeButton onClick={() => setToggle(false)}>
          Close
        </AlternativeButton>
      </Header>
      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <Item key={item.id}>
              <ImageWrapper>
                <Image
                  src={item.thumbnail}
                  alt=""
                  width="500"
                  height="500"
                  layout="responsive"
                />
              </ImageWrapper>
              <HeadingThree key={item.key}>{item.title}</HeadingThree>
              <ButtonContainer>
                <div>
                  <Button onClick={() => updateItem(item.id, -1)}>-</Button>
                  <Span>{item.quantity}</Span>
                  <Button onClick={() => updateItem(item.id, 1)}>+</Button>
                </div>
                <Button onClick={() => removeItem(item.id)}>
                  Delete from cart
                </Button>
              </ButtonContainer>
            </Item>
          );
        })
      ) : (
        <EmptyCart>
          <HeadingThree>YOUR CART IS EMPTY</HeadingThree>
        </EmptyCart>
      )}
      {cart.length > 0 && (
        <Footer>
          <div>
            <Form onSubmit={(e) => applyDiscountCode(e)}>
              <Input placeholder="DISCOUNT CODE" id="discount" />
              <Button type="submit">APPLY</Button>
            </Form>
            {errorMessage && <Message>Invalid discount code</Message>}
            <HeadingThree>
              Total price: £
              {discountCode ? totalPrice - discountTotal : totalPrice}
            </HeadingThree>
          </div>
          <AlternativeButton>Pay now</AlternativeButton>
        </Footer>
      )}
      {cart.length > 0 && discountCode && (
        <div>
          <Message>Discount code applied!</Message>
          <Message>Total savings £{discountTotal}</Message>
        </div>
      )}
    </Container>
  );
};

export default Cart;
