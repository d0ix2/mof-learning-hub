import { useState, useEffect, useRef } from "react";
import { Bot, User } from "lucide-react";

import ExampleQuestions from "../../components/ExampleQuestions/ExampleQuestions";
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

const AZURE_CHATBOT_ENDPOINT =
  "https://your-azure-chatbot-service.azurewebsites.net/api/chat";

// 예시 질문 목록 정의
const EXAMPLE_QUESTIONS = [
  "MOF의 정의와 주요 응용 분야는 무엇인가요?",
  "MOF 합성 방법 중 용매열 합성법에 대해 자세히 알려주세요.",
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

  // 메시지 전송 로직 (handleSendMessage에서 input 대신 직접 쿼리를 받도록 수정)
  const sendMessage = async (userQuery) => {
    if (!userQuery.trim() || isLoading) return;

    const newUserMessage = {
      id: Date.now(),
      text: userQuery.trim(),
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput(""); // 입력창을 비워도 되도록 처리
    setIsLoading(true);

    try {
      const botResponseText = await new Promise((resolve) => {
        setTimeout(async () => {
          if (userQuery.toLowerCase().includes("mof의 정의")) {
            resolve(
              "MOF(금속-유기 골격체)는 금속 이온 클러스터와 유기 리간드가 배위 결합을 통해 형성하는 다공성 물질입니다. 기체 흡착 및 분리, 촉매 등 다양한 분야에 응용됩니다.",
            );
          } else if (userQuery.toLowerCase().includes("합성 방법")) {
            resolve(
              "MOF의 일반적인 합성 방법에는 용매열 합성, 수열 합성, 마이크로파 합성 등이 있습니다. 용매열 합성이 가장 널리 사용되며, 특정 용매에서 금속 염과 유기 리간드를 가열하여 결정을 성장시키는 방식입니다.",
            );
          } else if (
            AZURE_CHATBOT_ENDPOINT.includes("your-azure-chatbot-service")
          ) {
            resolve(await callChatbotApi(userQuery));
          } else {
            resolve(
              `[${userQuery}]에 대한 챗봇의 답변입니다. (실제 Azure API 연동 필요)`,
            );
          }
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

  // 일반 입력창 전송 핸들러
  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  // 예시 질문 클릭 핸들러
  const handleExampleClick = (question) => {
    sendMessage(question);
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

        {/* ⭐ 예시 질문 버튼 영역 추가 ⭐ */}
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
