import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TopButton from "../../components/TopButton/TopButton";

import AbstractPart from "../../parts/AbstractPart/AbstractPart";
import MofExplainPart from "../../parts/MofExplainPart/MofExplainPart";
import ChatbotPart from "../../parts/ChatbotPart/ChatbotPart";

import { Container } from "./MainPage.style";

import useScrollToSection from "../../hooks/useScrollToSection";

const MainPage = () => {
  const { refs, scrollToSection } = useScrollToSection();

  return (
    <Container>
      <Header refs={refs} scrollToSection={scrollToSection} />

      {/* (1) 페이지 개요 설명 파트 */}
      <AbstractPart refs={refs} />

      {/* (2) MOF란 무엇인지 설명하는 파트 */}
      <MofExplainPart refs={refs} />

      {/* (3) Azure 챗봇 연동 채팅 파트 */}
      <ChatbotPart refs={refs} />

      <Footer />

      <TopButton />
    </Container>
  );
};

export default MainPage;
