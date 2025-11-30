import { Menu } from "lucide-react";

import { HeaderWrapper, Logo, NavButton } from "./Header.style";

const Header = ({ refs, scrollToSection }) => (
  <HeaderWrapper>
    <div
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "4rem",
        padding: "0 1rem",
      }}
    >
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        MOF Learning Hub
      </Logo>
      <nav
        className="hidden md:flex"
        style={{ display: "flex", gap: "1.5rem" }}
      >
        <NavButton onClick={() => scrollToSection(refs.overviewRef)}>
          개요
        </NavButton>
        <NavButton onClick={() => scrollToSection(refs.mofIntroRef)}>
          MOF란?
        </NavButton>
        <NavButton onClick={() => scrollToSection(refs.chatbotRef)}>
          챗봇에게 질문
        </NavButton>
      </nav>
      {/* 모바일 메뉴 (간단히 처리) */}
      <div className="md:hidden">
        <Menu
          style={{
            width: "1.5rem",
            height: "1.5rem",
            color: "#4F46E5", // 컴포넌트 분리 필요
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  </HeaderWrapper>
);

export default Header;
