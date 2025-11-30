import { useRef } from "react";

// 섹션별 스크롤 이동을 위한 사용자 정의 훅 (변경 없음)
const useScrollToSection = () => {
  const overviewRef = useRef(null);
  const mofIntroRef = useRef(null);
  const chatbotRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    refs: { overviewRef, mofIntroRef, chatbotRef },
    scrollToSection,
  };
};

export default useScrollToSection;
