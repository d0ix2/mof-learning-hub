import styled, { css, keyframes } from "styled-components";
import { Loader2 } from "lucide-react";

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  min-height: 500px;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid #e5e7eb;
  overflow: hidden;
`;

export const ChatMessages = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  background-color: #f9fafb;
`;

export const MessageRow = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.$sender === "user" ? "flex-end" : "flex-start"};
`;

export const Avatar = styled.div`
  padding: 0.5rem;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${(props) => (props.$sender === "bot" ? "0.75rem" : "0")};
  margin-left: ${(props) => (props.$sender === "user" ? "0.75rem" : "0")};

  background-color: ${(props) =>
    props.$sender === "bot" ? props.theme.color.PRIMARY_COLOR : "#9CA3AF"};
  color: white;
`;

export const MessageBubble = styled.div`
  max-width: 20rem;
  @media (min-width: 768px) {
    max-width: 28rem;
  }
  @media (min-width: 1024px) {
    max-width: 36rem;
  }

  padding: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;

  background-color: ${(props) =>
    props.$sender === "user" ? props.theme.color.PRIMARY_COLOR : "white"};
  color: ${(props) => (props.$sender === "user" ? "white" : "#1F2937")};
  border: ${(props) =>
    props.$sender === "bot" ? "1px solid #e5e7eb" : "none"};

  border-bottom-right-radius: ${(props) =>
    props.$sender === "user" ? "0" : "0.75rem"};
  border-top-left-radius: ${(props) =>
    props.$sender === "bot" ? "0" : "0.75rem"};

  p {
    font-size: 0.875rem;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
    white-space: pre-wrap;
  }
`;

export const LoaderIcon = styled(Loader2)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  animation: ${spin} 1s linear infinite;
`;

export const InputForm = styled.form`
  padding: 1rem;
  border-top: 1px solid ${(props) => props.theme.color.BORDER_COLOR};
  background-color: white;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  outline: none;
  transition: all 0.15s;

  &:focus {
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px ${(props) => props.theme.color.PRIMARY_COLOR};
    border-color: ${(props) => props.theme.color.PRIMARY_COLOR};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #f3f4f6;
  }
`;

export const SendButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: background-color 0.2s;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.disabled
      ? css`
          background-color: #9ca3af;
          cursor: not-allowed;
          color: white;
        `
      : css`
          background-color: ${(props) => props.theme.color.PRIMARY_COLOR};
          color: white;
          &:hover {
            background-color: ${(props) => props.theme.color.PRIMARY_DARK};
          }
        `}
`;
