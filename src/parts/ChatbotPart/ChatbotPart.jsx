import { useState, useEffect, useRef } from "react";

import ReactMarkdown from "react-markdown";

import { Bot, User } from "lucide-react";

import ExampleQuestions from "../../components/ExampleQuestions/ExampleQuestions";
import LevelSelector from "../../components/LevelSelector/LevelSelector";
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

const SYSTEM_PROMPTS = {
  // 금속 중심과 유기 연결체를 비유로 설명하는 초급 레벨
  MIDDLE_HIGH: {
    key: "MIDDLE_HIGH",
    label: "중~고등학생",
    prompt:
      "당신은 MOF에 대한 기초 학습을 돕는 친절한 AI 도우미입니다. 답변은 고등학교 화학Ⅰ, Ⅱ 수준 용어로 설명하고, MOF의 금속 중심은 '레고 블록'이나 '뼈대'로, 유기 연결체는 '연결 고리'로 비유하여 친근하고 쉽게 설명하세요. 모든 답변에 MOF 개념을 포함해야 합니다. 항상 학습자를 독려하는 친근한 어조를 유지하세요. 사용자가 이미지를 요청하는 경우, 당신은 이미지 생성이 불가능하므로 대신 https://www.ccdc.cam.ac.uk/structures/ 웹사이트를 이용해 보도록 안내해 주세요.",
  },
  // 배위 화학, SBU 등 전공 용어를 사용하는 심화 레벨
  UNIVERSITY: {
    key: "UNIVERSITY",
    label: "학부생 이상",
    prompt:
      "당신은 MOF 학습을 돕는 전문가 AI 도우미입니다. 답변은 배위 화학, 결정학, 표면적, 다공성, SBU 등 전공 수준의 용어와 개념을 사용하여 명확하고 간결하게 설명하세요. MOF의 구조적 특징, 합성과 관련된 중요 변수, 응용 분야(가스 저장, 촉매, 분리 등) 중 하나 이상을 반드시 연결하여 설명하세요. 친근하면서도 전문가의 신뢰감을 줄 수 있는 어조를 유지하세요. 사용자가 이미지를 요청하는 경우, 당신은 이미지 생성이 불가능하므로 대신 https://www.ccdc.cam.ac.uk/structures/ 웹사이트를 이용해 보도록 안내해 주세요.",
  },
};

function ChatbotPart({ refs }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "안녕하세요! 저는 MOF 학습 도우미 **Moffy**라고 해요. 학습자님의 레벨을 선택하신 후, MOF에 대해 궁금한 점을 자유롭게 질문해 주세요.",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatInputRef = useRef(null);
  const isInitialMount = useRef(true);
  const [selectedLevel, setSelectedLevel] = useState(
    SYSTEM_PROMPTS.UNIVERSITY.key,
  );

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

    const currentSystemPrompt = SYSTEM_PROMPTS[selectedLevel].prompt;

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
            currentSystemPrompt,
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

  const handleLevelChange = (levelKey) => {
    setSelectedLevel(levelKey);
    // 레벨 변경 시, 사용자에게 현재 레벨을 안내하는 메시지를 추가 (선택적)
    setMessages([
      {
        id: Date.now(),
        text: `학습자님의 레벨이 ${SYSTEM_PROMPTS[levelKey].label}으로 설정되었어요. 이제 자유롭게 MOF에 대해 질문해 보세요!`,
        sender: "bot",
      },
    ]);
  };

  return (
    <Section
      id="chatbot"
      title="MOF 학습 도우미 Moffy에게 질문하기"
      ref={refs.chatbotRef}
    >
      <p style={{ fontSize: "1.125rem", lineHeight: "1.625" }}>
        먼저 학습자님의 수준에 맞는 레벨을 선택한 후, MOF에 대해 궁금한 점을
        자유롭게 질문해 주세요. Moffy가 친절하고 자세하게 답변해 드릴 거예요!
      </p>

      <LevelSelector
        selectedLevel={selectedLevel}
        onLevelChange={handleLevelChange}
        isLoading={isLoading}
        systemPrompt={SYSTEM_PROMPTS}
      />

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
