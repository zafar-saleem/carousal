"use client";

import { createGlobalStyle } from "styled-components";

const reset = {
  padding: 0,
  margin: 0,
};

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    ${{...reset}};
    color: #e7e7e7;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    width: 100vw;
    background-color: #4e4c52;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, li {
    ${{...reset}};
    list-style-type: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input:[type="number"] {
    -moz-appearance: textfield;
  }

  * {
    box-sizing: border-box;
  }
`;
