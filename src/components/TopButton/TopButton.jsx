import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

import { ScrollToTopButton } from "./TopButton.style";

// 상단 이동 버튼 (스타일 컴포넌트 적용)
const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollToTopButton
      onClick={scrollToTop}
      $isVisible={isVisible} // styled-components에서 props 이름 충돌을 피하기 위해 $ 접두사 사용
      aria-label="맨 위로 이동"
    >
      <ChevronUp style={{ width: "1.5rem", height: "1.5rem" }} />
    </ScrollToTopButton>
  );
};

export default TopButton;
