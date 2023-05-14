import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .flex {
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 auto;
    flex-basis: 100%;
    max-width: 100%;
    
    &.between {
      justify-content: space-between;
    }
  }
`;
