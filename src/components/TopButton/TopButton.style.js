import styled from "styled-components";

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 0.75rem;
  border-radius: 50%;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s;
  z-index: 50;
  border: none;

  background-color: ${(props) => props.theme.color.PRIMARY_COLOR};
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.color.PRIMARY_DARK};
  }

  opacity: ${(props) => (props.$isVisible ? "1" : "0")};
  pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};
  cursor: pointer;
`;
