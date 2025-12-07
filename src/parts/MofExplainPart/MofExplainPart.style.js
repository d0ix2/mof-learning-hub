import styled, { keyframes } from "styled-components";

const size = {
  tablet: "768px",
  mobile: "480px",
};

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

const rotateY = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const RotatingImageContainer = styled.div`
  perspective: 1000px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%; /* 필요에 따라 조정 */
  height: auto; /* 필요에 따라 조정 */
  margin: 0 auto;
  overflow: visible;

  @media (max-width: ${size.tablet}) {
    flex-direction: column; /* 화면이 작아지면: 세로 정렬로 변경 */
    align-items: stretch;
  }
`;

export const RotatingImage = styled.img`
  /* 3D 회전의 원근 효과를 컨테이너로부터 상속받음 */
  transform-style: preserve-3d;

  /* 애니메이션 적용 */
  animation: ${rotateY} 20s linear infinite;

  /* 이미지 크기 설정 */
  width: 400px;
  height: auto;
  display: block;
  align-self: center;
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
