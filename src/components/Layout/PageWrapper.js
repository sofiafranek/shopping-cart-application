import React from "react";
import styled from "styled-components";

import BREAKPOINTS from "../../styles/breakpoints";

import Navigation from "./Navigation";

const Main = styled.main`
  max-width: 1600px;
  margin: auto;
  padding: 100px 30px;

  ${BREAKPOINTS.min.small`
    padding: 140px 30px;
  `}
`;

const PageWrapper = ({ children }) => {
  return (
    <Main>
      <Navigation />
      {children}
    </Main>
  );
};

export default PageWrapper;
