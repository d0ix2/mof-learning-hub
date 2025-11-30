import styled from "styled-components";

export const UlList = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem;
  color: #4b5563;
  & > li {
    margin-bottom: 0.75rem;
  }
  & > li > span {
    font-weight: 600;
  }
`;
