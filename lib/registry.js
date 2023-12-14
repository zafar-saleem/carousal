"use client"
 
import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "@/theme";

const reset = {
  padding: 0,
  margin: 0,
};

const GlobalStyles = createGlobalStyle`
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

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, li {
    ${{...reset}};
    list-style-type: none;
  }

  * {
    box-sizing: border-box;
  }
`;
 
export default function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== "undefined") return <>{children}</>
 
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
          {children}
          <GlobalStyles />
      </StyleSheetManager>
    </ThemeProvider>
  )
}
