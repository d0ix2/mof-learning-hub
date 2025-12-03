import {
  ExampleQuestionsContainer,
  ExampleButton,
} from "./ExampleQuestions.style";

function ExampleQuestions({ questions, onSelect, isLoading }) {
  return (
    <ExampleQuestionsContainer>
      {questions.map((question, index) => (
        <ExampleButton
          key={index}
          onClick={() => onSelect(question)}
          disabled={isLoading} // 챗봇 응답 중에는 비활성화
        >
          {question}
        </ExampleButton>
      ))}
    </ExampleQuestionsContainer>
  );
}

export default ExampleQuestions;
