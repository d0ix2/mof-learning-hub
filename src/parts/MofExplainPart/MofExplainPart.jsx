import Section from "../../components/Section/Section";
import {
  InfoBox,
  OlList,
  RotatingImage,
  RotatingImageContainer,
  HowToUseContainer,
  LearningGuide,
} from "./MofExplainPart.style";

/* (2) MOF란 무엇인지 설명하는 파트 */
function MofExplainPart({ refs }) {
  return (
    <Section
      id="mof-intro"
      title="MOF(금속-유기 골격체)란 무엇인가요?"
      ref={refs.mofIntroRef}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <RotatingImageContainer>
          <RotatingImage
            src="/img/mof-ion.png"
            alt="MOF Structure Illustration"
          />
          <RotatingImage
            src="/img/mof-linker.png"
            alt="MOF Structure Illustration"
          />
          <RotatingImage
            src="/img/mof-structure.png"
            alt="MOF Structure Illustration"
            style={{ width: "500px", height: "500px" }}
          />
        </RotatingImageContainer>

        <HowToUseContainer>
          <LearningGuide>
            <h3>MOF의 정의</h3>
            <div className="step-content">
              MOF는 다공성 물질의 한 종류로,{" "}
              <b>금속 이온 클러스터(Metal Ion Clusters)</b>와 이를 연결하는{" "}
              <b>유기 리간드(Organic Linkers)</b>가 반복적으로 배위 결합하여
              만들어지는 <b>결정성 구조</b>예요. 쉽게 말해, 금속과 유기 분자가
              규칙적으로 연결되며 3차원 골격을 이루는 물질이에요. MOF는 ‘
              <b>분자 레고</b>
              ’라고도 불리는데, 레고 블록처럼 금속 이온과 유기 분자를 조합해
              다양한 구조를 설계할 수 있기 때문이에요. 이러한 독특한 연결 방식
              덕분에
              <b>매우 넓은 표면적</b>과 <b>균일한 기공(Pore) 크기</b>를 가지며,
              기체 저장·분리·촉매 등 여러 분야에서 활용되고 있답니다.
            </div>
          </LearningGuide>

          <LearningGuide>
            <h3>MOF의 구조</h3>
            <ol>
              <li>
                <span className="step-number">1</span>
                <div className="step-content">
                  <span className="step-title">금속 노드(Metal Nodes):</span>{" "}
                  여러 블록의 사이사이를 연결하는 ‘정점’ 또는 ‘마디’ 역할을
                  해요. Zn, Cu, Al 등 다양한 금속 이온이 사용되며, 이 금속들은
                  때때로 금속-클러스터(Metal Cluster) 형태로 모여 하나의 결합
                  중심을 이루기도 합니다. 금속 노드는 유기 리간드와 배위 결합을
                  형성하여 3차원 골격 구조를 안정화하고, MOF의 기공
                  크기·안정성·흡착 특성 등을 결정하는 데 중요한 역할을 해요.
                  그림에서는 동그라미 모양으로 표현되어 있어요.
                </div>
              </li>
              <li>
                <span className="step-number">2</span>
                <div className="step-content">
                  <span className="step-title">
                    유기 연결체(Organic Linkers):
                  </span>{" "}
                  금속을 일정한 거리와 각도로 연결하는 ‘뼈대’ 또는 ‘다리’ 역할을
                  해요. 테레프탈산(Terephthalic acid)과 같은 유기 분자들이 금속
                  노드와 배위 결합을 이루어 전체 골격 구조를 형성하는데, 이 유기
                  연결체는 금속 간의 간격을 조절하고 기공의 크기·형상·화학적
                  성질을 결정하는 데 큰 영향을 줘요. 또한, 연결체의 작용기(예:
                  –NH₂, –OH, –NO₂ 등)를 변형하면 MOF의 흡착 특성이나 반응성을
                  조절할 수도 있답니다. 그림에서 막대 모양으로 표현되어 있는
                  부분이 바로 이 유기 연결체예요.
                </div>
              </li>
            </ol>
          </LearningGuide>

          <LearningGuide>
            <h3>MOF의 응용 분야</h3>
            <div className="step-content">
              MOF는 특히 가스 저장 — 수소(H₂), 메탄, 이산화탄소(CO₂) 등을
              고밀도로 저장할 수 있어요. 또한 가스 분리·정제에도 유용해서, 서로
              섞여 있는 기체들을 선택적으로 흡착하거나 분리하는 데 쓸 수
              있습니다. 또 촉매로 활용되기도 하고, 센서, 약물 전달 시스템처럼
              내부 기공을 이용해 분자를 가두거나 반응을 유도하는 응용도 활발히
              연구되고 있어요. 일부 MOF는 공기 중 사막의 습기로부터 물을
              끌어내는(Water-harvesting) 용도로도 쓰일 가능성이 있다고 해요.
              <br />
              <br />
              MOF는 수만 가지 조합이 가능한 ‘맞춤형 스펀지’로 불리는데, 금속
              이온과 유기 리간드를 바꾸거나 구조를 달리하면 흡착 대상, 기공
              크기, 화학 반응성 등을 조절할 수 있기 때문이에요. 이런 설계의
              유연성 덕분에 환경 문제 해결(예: CO₂ 포집), 에너지 저장, 약물
              전달, 오염 물질 제거, 촉매 반응 개선 등 다양한 사용처가 열려
              있어요.
              <br />
              <br />
              2025년 10월, MOF 분야를 개척한 과학자들 — Susumu Kitagawa, Richard
              Robson, Omar M. Yaghi — 가 2025년 노벨 화학상을 수상하면서 MOF의
              중요성과 가능성이 전 세계적으로 재조명되었어요. 이들에게 수여된
              상은 “금속 이온과 유기 분자를 연결해 분자 건축법을 만들었다”는
              공로로, MOF가 기후 위기 대응(예: 탄소 포집), 청정에너지, 신소재
              개발 등 미래 기술의 핵심이 될 수 있음을 의미합니다.
              <br />
              <br />
              이처럼 MOF는 단순한 학술 물질을 넘어서, 환경 문제 해결, 에너지,
              약학, 고성능 소재 등 다양한 실용 분야에서 ‘다재다능한 플랫폼’으로
              각광받고 있어요.
            </div>
          </LearningGuide>
        </HowToUseContainer>
      </div>
    </Section>
  );
}

export default MofExplainPart;
