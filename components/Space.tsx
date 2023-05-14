import styled from "styled-components";

export const Space = styled.div`
  display: block;
  height: 14px;
  @media screen and (min-width: 768px) {
    height: 28px;
  }
  &.full {
    width: 100%;
  }
`;
