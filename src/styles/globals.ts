"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.primaryBackground} !important;
    color: ${({ theme }) => theme.textColor} !important;
  }
`;
