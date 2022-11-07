import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import COLORS from "../../styles/colors";

import CartModal from "../Cart";

const Container = styled.nav`
  max-width: 1600px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${COLORS.white};
`;

const Annoucement = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: ${COLORS.white};
  color: ${COLORS.black};
  padding: 10px 20px;
  text-align: center;

  span {
    margin: 0 10px;
  }
`;

const Title = styled.h4`
  letter-spacing: 5px;
`;

const Cart = styled.button`
  letter-spacing: 1px;
  font-weight: bold;
  float: right;
`;

const Navigation = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <Annoucement>
        <Marquee gradient={false} speed={20}>
          Use the code DISCOUNT at the cart to apply discounts <span>✺</span>
          Use the code DISCOUNT at the cart to apply discounts <span>✺</span>
          Use the code DISCOUNT at the cart to apply discounts <span>✺</span>
          Use the code DISCOUNT at the cart to apply discounts <span>✺</span>
          Use the code DISCOUNT at the cart to apply discounts <span>✺</span>
          Use the code DISCOUNT at the cart to apply discounts <span>✺</span>
          Use the code DISCOUNT at the cart to apply discounts <span>✺</span>
          Use the code DISCOUNT at the cart to apply discounts <span>✺</span>
          Use the code DISCOUNT at the cart to apply discounts <span>✺</span>
          Use the code DISCOUNT at the cart to apply discounts <span>✺</span>
        </Marquee>
      </Annoucement>
      <Container>
        <Link href="/" passHref>
          <Title>THE SHOP</Title>
        </Link>
        <Cart onClick={() => setToggle(true)}>CART</Cart>
      </Container>
      <CartModal setToggle={setToggle} toggle={toggle} />
    </>
  );
};

export default Navigation;
