import React, { useState, useEffect, useRef } from "react";
import { Bot, User } from "lucide-react";

import Section from "../../components/Section/Section";
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

// 임시 챗봇 API 엔드포인트
// 배포 시 Netlify Build Settings에서 환경 변수를 설정 예정
const AZURE_CHATBOT_ENDPOINT =
  "https://your-azure-chatbot-service.azurewebsites.net/api/chat";

const ChatbotPart = (refs) => {
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

  // 채팅 메시지 목록의 끝으로 자동 스크롤
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // 챗봇 API 호출 (변경 없음, 시뮬레이션 유지)
  const callChatbotApi = async (userQuery) => {
    if (AZURE_CHATBOT_ENDPOINT.includes("your-azure-chatbot-service")) {
      return "죄송합니다. 현재 챗봇 엔드포인트가 설정되지 않았거나 유효하지 않습니다. 관리자에게 문의해주세요.";
    }

    try {
      const response = await fetch(AZURE_CHATBOT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userQuery }),
      });

      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.status}`);
      }

      const data = await response.json();
      return (
        data.response ||
        "챗봇 응답을 받지 못했습니다. 잠시 후 다시 시도해주세요."
      );
    } catch (error) {
      console.error("챗봇 API 통신 오류:", error);
      return `API 통신 중 오류가 발생했습니다: ${error.message}.`;
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const newUserMessage = {
      id: Date.now(),
      text: userMessage,
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const botResponseText = await new Promise(async (resolve) => {
        await new Promise((r) => setTimeout(r, 1000));

        if (userMessage.toLowerCase().includes("mof")) {
          resolve(
            "MOF(금속-유기 골격체)는 금속 이온 클러스터와 유기 리간드가 배위 결합을 통해 형성하는 다공성 물질입니다. 기체 흡착 및 분리, 촉매 등 다양한 분야에 응용됩니다.",
          );
        } else if (
          AZURE_CHATBOT_ENDPOINT.includes("your-azure-chatbot-service")
        ) {
          resolve(await callChatbotApi(userMessage));
        } else {
          resolve(
            "문의하신 내용에 대한 챗봇의 답변입니다. (실제 Azure API 연동 필요)",
          );
        }
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
                <p>{message.text}</p>
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
};

export default ChatbotPart;
