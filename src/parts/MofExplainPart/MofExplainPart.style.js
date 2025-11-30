import styled from "styled-components";

export const InfoBox = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.color.PRIMARY_LIGHT_BG};
  border: 1px solid ${(props) => props.theme.color.BORDER_COLOR};
`;

export const OlList = styled.ol`
  list-style-type: decimal;
  padding-left: 1.5rem;
  color: #4b5563;
  & > li > span {
    font-weight: 500;
  }
  & > li {
    margin-bottom: 0.25rem;
  }
`;
