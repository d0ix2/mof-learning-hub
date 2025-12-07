import styled, { keyframes } from "styled-components";

// 1. 애니메이션 키프레임 정의
// 'slideIn' 애니메이션: 위 (-100px)에서 시작하여 제자리 (0)로 이동하며 투명도(opacity)를 높임
const slideIn = keyframes`
  0% {
    transform: translateY(100px); /* 화면 상단 밖에서 시작 */
    opacity: 0;
  }
  100% {
    transform: translateY(0); /* 최종 위치 (원래 위치) */
    opacity: 1; /* 완전히 보이게 함 */
  }
`;

// 2. 스타일드 컴포넌트 정의
export const AnimatedLogo = styled.h1`
  font-size: 8em;
  font-weight: bold;
  font-family: "DungGeunMo", sans-serif;
  color: ${(props) => props.theme.color.PRIMARY_COLOR};
  text-align: center;
  padding: 200px 50px 100px 50px;

  /* 애니메이션 적용 */
  /* slideIn 애니메이션을 1초 동안, ease-out 속도로, 애니메이션 종료 상태를 유지하며 실행 */
  animation: ${slideIn} 1s ease-out forwards;
`;
