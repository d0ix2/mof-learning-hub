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
    align-items: stretch; /* 세로 정렬 시 아이템 너비 늘림 */
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
