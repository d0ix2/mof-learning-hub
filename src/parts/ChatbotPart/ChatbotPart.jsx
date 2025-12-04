import { useState, useEffect, useRef } from "react";

import ReactMarkdown from "react-markdown";

import { Bot, User } from "lucide-react";

import ExampleQuestions from "../../components/ExampleQuestions/ExampleQuestions";
import Section from "../../components/Section/Section";

import { getAzureChatbotResponse } from "../../api/getAzureChatbotResponse";

import {
  ChatContainer,
  ChatMessages,
  MessageRow,
  Avatar,
  MessageBubble,
  InputForm,
  InputGroup,
  ChatInput,
  SendButton,
  LoaderIcon,
} from "./ChatbotPart.style";

// 예시 질문 목록 정의
const EXAMPLE_QUESTIONS = [
  "MOF의 정의와 주요 응용 분야는 무엇인가요?",
  "MOF 합성 방법 중 용매열 합성법에 대해 알려 주세요.",
  "MOF의 다공성 구조가 가지는 장점은 무엇인가요?",
  "MOF 연구 동향과 미래 전망에 대해 설명해 주세요.",
];

function ChatbotPart({ refs }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "안녕하세요! 저는 MOF 학습 도우미 챗봇입니다. MOF에 대해 궁금한 점을 질문해 주세요.",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatInputRef = useRef(null);
  const isInitialMount = useRef(true);

  // 채팅 메시지 목록의 끝으로 자동 스크롤
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // 메시지 전송 로직
  const sendMessage = async (userQuery) => {
    if (!userQuery.trim() || isLoading) return;

    const newUserMessage = {
      id: Date.now(),
      text: userQuery.trim(),
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const botResponseText = await new Promise((resolve) => {
        setTimeout(async () => {
          const endpoint = process.env.REACT_APP_AZURE_CHATBOT_ENDPOINT;
          const apiKey = process.env.REACT_APP_AZURE_CHATBOT_API_KEY;

          const apiResponse = await getAzureChatbotResponse(
            userQuery,
            endpoint,
            apiKey,
          );
          resolve(apiResponse);
        }, 1000);
      });

      const botMessage = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("챗봇 처리 중 오류 발생:", error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "메시지를 처리하는 중 오류가 발생했습니다.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      chatInputRef.current?.focus();
    }
  };

  const handleExampleClick = (question) => {
    sendMessage(question);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <Section
      id="chatbot"
      title="3. MOF 챗봇에게 질문하기"
      ref={refs.chatbotRef}
    >
      <ChatContainer>
        {/* 채팅 메시지 영역 */}

        <ChatMessages>
          {messages.map((message) => (
            <MessageRow key={message.id} $sender={message.sender}>
              {message.sender === "bot" && (
                <Avatar $sender="bot">
                  <Bot size={18} />
                </Avatar>
              )}
              <MessageBubble $sender={message.sender}>
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </MessageBubble>
              {message.sender === "user" && (
                <Avatar $sender="user">
                  <User size={18} />
                </Avatar>
              )}
            </MessageRow>
          ))}
          {isLoading && (
            <MessageRow $sender="bot">
              <Avatar $sender="bot">
                <Bot size={18} />
              </Avatar>
              <MessageBubble
                $sender="bot"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#6B7280",
                }}
              >
                <LoaderIcon />
                <span style={{ fontSize: "0.875rem" }}>답변 생성 중...</span>
              </MessageBubble>
            </MessageRow>
          )}
          <div ref={messagesEndRef} />
        </ChatMessages>

        {/* 예시 질문 버튼 영역 */}
        <ExampleQuestions
          questions={EXAMPLE_QUESTIONS}
          onSelect={handleExampleClick}
          isLoading={isLoading}
        />

        {/* 입력 폼 */}
        <InputForm onSubmit={handleSendMessage}>
          <InputGroup>
            <ChatInput
              ref={chatInputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="MOF에 대해 궁금한 점을 입력하세요..."
              disabled={isLoading}
            />

            <SendButton type="submit" disabled={isLoading}>
              보내기
            </SendButton>
          </InputGroup>
        </InputForm>
      </ChatContainer>
    </Section>
  );
}

export default ChatbotPart;
