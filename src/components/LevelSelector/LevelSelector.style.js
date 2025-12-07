import styled from "styled-components";

export const LevelContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 30px;
`;

export const LevelButton = styled.button`
  padding: 15px 25px;
  border: 2px solid
    ${(props) =>
      props.$isSelected
        ? props.theme.color.PRIMARY_DARK
        : props.theme.color.PRIMARY_DARK};
  background-color: ${(props) =>
    props.$isSelected
      ? props.theme.color.PRIMARY_COLOR
      : props.theme.color.PRIMARY_LIGHT_BG};
  color: ${(props) =>
    props.$isSelected
      ? props.theme.color.PRIMARY_LIGHT_BG
      : props.theme.color.PRIMARY_COLOR};
  font-weight: ${(props) => (props.$isSelected ? "bold" : "normal")};
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
