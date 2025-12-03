import styled from "styled-components";

export const ExampleQuestionsContainer = styled.div`
  padding: 8px 16px 12px; // 메시지 영역과 입력창 사이에 공간 확보
  border-top: 1px solid #e5e7eb; // 구분선
  background-color: #f9fafb; // 배경색으로 구분
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 120px; // 최대 높이 설정
  overflow-y: auto; // 스크롤 가능
`;

// 예시 질문 버튼 스타일
export const ExampleButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  color: #374151;
  padding: 8px 12px;
  border-radius: 9999px; // 둥근 모양
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap; // 텍스트 줄바꿈 방지

  &:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
