import Section from "../../components/Section/Section";
import { UlList, HowToUseContainer, LearningGuide } from "./AbstractPart.style";

/* (1) 페이지 개요 설명 파트 */
function AbstractPart({ refs }) {
  return (
    <Section id="overview" title="MOF Learning Hub?" ref={refs.overviewRef}>
      <p
        style={{
          fontSize: "1.125rem",
          lineHeight: "1.625",
          marginBottom: "1.5rem",
        }}
      >
        MOF Learning Hub는 금속-유기 골격체(MOF, Metal-Organic Frameworks)에
        대한 학습을 지원하기 위한 웹사이트예요. 학습자의 레벨에 맞는 학습 코스를
        추천하고, MOF에 대한 기초 지식을 제공해요. 또한 Microsoft Azure 기반으로
        구축된 지능형 챗봇인 Moffy와의 상호작용을 통해, 학습자의 질문에 답변을
        제공하고 궁금증 해결을 도와요.
      </p>
      <UlList>
        <li>
          <span className="font-semibold">MOF에 대한 설명 제공:</span> MOF의
          기본 개념을 소개해요. 이해를 돕는 이미지와 함께 MOF를 공부해 보세요.
        </li>
        <li>
          <span className="font-semibold">Moffy를 이용한 실시간 질의응답:</span>{" "}
          페이지 하단에서 학습 도우미 Moffy와의 대화를 통해 MOF와 관련된 복잡한
          질문에 대해 즉각적인 답변을 얻을 수 있어요. 어렵고 막히는 부분이
          있다면 주저하지 말고 Moffy에게 질문해 보세요!
        </li>
      </UlList>

      <HowToUseContainer>
        <h2>이렇게 활용해 보세요!</h2>

        {/* 중~고등학생 추천 학습 컴포넌트 */}
        <LearningGuide>
          <h3>👩‍🎓 중·고등학생 추천 학습 (개념 익히기)</h3>
          <ol>
            <li>
              <span className="step-number">1</span>
              <div className="step-content">
                <span className="step-title">MOF 기본 이해:</span> 웹사이트의
                'MOF(금속-유기 골격체)란 무엇인가요?' 파트에서 MOF의 정의, 구조,
                그리고 응용 분야를 가볍게 읽어 보세요.
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div className="step-content">
                <span className="step-title">핵심 용어 질문:</span> Moffy에게
                "MOF의 링커가 뭐예요?", "흡착이 뭐예요?"와 같은 핵심 키워드를
                질문해 개념을 명확히 해요.
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div className="step-content">
                <span className="step-title">학습 정리:</span> Moffy에게 "오늘
                배운 내용을 쉬운 언어로 요약해 주세요"라고 요청해 학습 내용을
                복습하고 마무리해요.
              </div>
            </li>
          </ol>
        </LearningGuide>

        {/* 학부생 이상 추천 학습 컴포넌트 */}
        <LearningGuide>
          <h3>👨‍🔬 학부생 이상 추천 학습 (심층 연구)</h3>
          <ol>
            <li>
              <span className="step-number">1</span>
              <div className="step-content">
                <span className="step-title">고급 주제 탐색:</span> MOF의 합성
                방법, 구조 제어 등, 심화된 학습 콘텐츠를 탐색하여 전문 지식을
                쌓아요.
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div className="step-content">
                <span className="step-title">연구 질문 활용:</span> Moffy에게
                "UiO-66의 열 안정성은 왜 높아요?", "MOF를 이용한 Co2 포집의 최신
                연구 동향이 궁금해요"와 같이 심도 있는 질문을 던져 보세요.
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div className="step-content">
                <span className="step-title">데이터 및 논문 검색:</span> Moffy의
                답변을 기반으로 관련 연구 논문 제목이나 데이터를 확인하여 후속
                학습을 위한 키워드를 얻어요.
              </div>
            </li>
          </ol>
        </LearningGuide>
      </HowToUseContainer>
    </Section>
  );
}

export default AbstractPart;
