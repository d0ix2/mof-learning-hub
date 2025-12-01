import Section from "../../components/Section/Section";
import { InfoBox, OlList } from "./MofExplainPart.style";

/* (2) MOF란 무엇인지 설명하는 파트 */
function MofExplainPart({ refs }) {
  return (
    <Section
      id="mof-intro"
      title="2. MOF (금속-유기 골격체) 소개"
      ref={refs.mofIntroRef}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <p style={{ fontSize: "1.125rem", lineHeight: "1.625" }}>
          MOF는 다공성 물질의 한 종류로, '금속 이온 클러스터(Metal Ion
          Clusters)'와 이들을 연결하는 '유기 리간드(Organic Linkers)'의 반복적인
          배위 결합을 통해 형성되는 결정성 물질입니다. 이 독특한 구조 덕분에
          매우 넓은 표면적과 균일한 기공(Pore) 크기를 가지는 것이 특징입니다.
        </p>
        <InfoBox>
          <h4
            style={{
              fontWeight: 700,
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
              color: "#4338CA", // 컴포넌트 분리 필요
            }}
          >
            핵심 구성 요소:
          </h4>
          <OlList>
            <li>
              <span className="font-medium">금속 노드 (Metal Nodes):</span> Zn,
              Cu, Al 등 다양한 금속 이온이나 이들의 클러스터가 사용됩니다.
            </li>
            <li>
              <span className="font-medium">
                유기 연결체 (Organic Linkers):
              </span>{" "}
              테레프탈산(Terephthalic acid)과 같은 유기 분자들이 금속 노드와
              결합하여 골격 구조를 형성합니다.
            </li>
          </OlList>
        </InfoBox>
        <p style={{ fontSize: "1.125rem", lineHeight: "1.625" }}>
          MOF는 특히 가스 저장(수소, 메탄, 이산화탄소 등), 가스 분리/정제, 촉매,
          센서, 약물 전달 시스템 등 첨단 화학 및 공학 분야에서 광범위하게
          연구되고 활용됩니다. 그 설계의 다양성(수만 가지 조합 가능)으로 인해
          '맞춤형 스펀지'라고 불리기도 합니다.
        </p>
      </div>
    </Section>
  );
}

export default MofExplainPart;
