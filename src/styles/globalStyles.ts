"use client";

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.primaryBackground};
    transition: .5s;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    color: ${({ theme }) => theme.whiteColor};
  }
`;
