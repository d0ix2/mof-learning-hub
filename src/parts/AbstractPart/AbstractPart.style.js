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

export const HowToUseContainer = styled.div`
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-left: 5px solid ${(props) => props.theme.color.PRIMARY_COLOR};
  background-color: #f8f9fa;

  h2 {
    font-family: "DungGeunMo";
    font-size: 1.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.color.PRIMARY_DARK};
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
  }
`;

export const LearningGuide = styled.div`
  margin-top: 1.5rem;

  h3 {
    font-family: "DungGeunMo";
    font-size: 1.375rem;
    font-weight: 700;
    color: ${(props) => props.theme.color.PRIMARY_DARK};
    margin-bottom: 0.75rem;
    border-bottom: 2px solid #e9ecef;
    padding-bottom: 0.5rem;
  }

  ol {
    list-style: none; /* 기본 번호 제거 */
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;
  }

  .step-number {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    background-color: ${(props) =>
      props.theme.color.PRIMARY_COLOR}; /* 번호 배경색 */
    color: white;
    border-radius: 50%;
    font-weight: 700;
    font-size: 1rem;
    flex-shrink: 0; /* 내용이 길어져도 축소되지 않도록 함 */
    margin-right: 0.75rem;
  }

  .step-content {
    line-height: 1.5;
  }

  .step-title {
    font-weight: 600;
    color: ${(props) => props.theme.color.PRIMARY_COLOR};
    margin-right: 0.5rem;
  }
`;
