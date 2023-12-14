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
    color: ${props => props.theme.tokens.colors.font.font200};
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.theme.tokens.sizes.size100};
    font-weight: 500;
    width: 100vw;
    background-color: ${props => props.theme.tokens.colors.branding.brand500};
  }

  // a {
  //   color: inherit;
  //   text-decoration: none;
  // }

  a {
    color: #007bff;
    text-decoration: underline;
    cursor: pointer;
   }
   
   a.disabled {
    cursor: not-allowed;
    color: #d9d9d9;
   }
   
   button {
    padding: 10px 20px;
    cursor: pointer;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
   }
   
   button.disabled {
    background: #d9d9d9;
    cursor: not-allowed;
   }

  ul, li {
    ${{...reset}};
    list-style-type: none;
  }

  * {
    box-sizing: border-box;
  }
`;
