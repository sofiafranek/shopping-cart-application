import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

// import CursorProvider from '../src/components/CursorProvider';

import BREAKPOINTS from "../src/styles/breakpoints";
import COLORS from "../src/styles/colors";

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: ${COLORS.lightGrey};
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  margin: 0 auto;
  max-width: 400px;
`;

const LinkStyles = css`
  text-decoration: underline;

  ${BREAKPOINTS.min.xsmall`
    display: block;
  `}
`;

function Error() {
  return (
    // <CursorProvider>
    <Container>
      <div>
        <Title>Ooops... Error 404</Title>
        <Subtitle>
          We are sorry, but the page you are looking for does not exist. Please
          check the entered address and try again or{" "}
          <Link href="/" styles={LinkStyles}>
            <a>go back to the homepage.</a>
          </Link>
        </Subtitle>
      </div>
    </Container>
    // </CursorProvider>
  );
}

export default Error;
