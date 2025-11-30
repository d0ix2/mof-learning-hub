import Section from "../../components/Section/Section";
import { UlList } from "./AbstractPart.style";

/* (1) 페이지 개요 설명 파트 */
const AbstractPart = ({ refs }) => {
  return (
    <Section
      id="overview"
      title="1. MOF 학습 도우미 개요"
      ref={refs.overviewRef}
    >
      <p
        style={{
          fontSize: "1.125rem",
          lineHeight: "1.625",
          marginBottom: "1.5rem",
        }}
      >
        본 웹사이트는 금속-유기 골격체(MOF, Metal-Organic Frameworks)에 대한
        학습을 지원하고, Azure 기반으로 개발된 지능형 챗봇과의 상호작용을 통해
        사용자의 질문에 답변을 제공하는 목적으로 제작되었습니다.
      </p>
      <UlList>
        <li>
          <span className="font-semibold">학습 콘텐츠 제공:</span> MOF의 기본
          개념을 쉽게 이해할 수 있도록 소개합니다.
        </li>
        <li>
          <span className="font-semibold">실시간 질의응답:</span> 페이지 하단의
          챗봇 파트를 통해 MOF와 관련된 복잡한 질문에 대해 즉각적인 답변을 얻을
          수 있습니다.
        </li>
        <li>
          <span className="font-semibold">기술 스택:</span> React와 Tailwind
          CSS로 프론트엔드를 구축하였으며, Netlify 배포 환경을 고려하여 단일
          파일 및 환경 변수 기반 엔드포인트 숨김 방식을 채택하였습니다.
        </li>
      </UlList>
    </Section>
  );
};

export default AbstractPart;
