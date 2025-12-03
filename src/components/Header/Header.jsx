import { Menu } from "lucide-react";

import { HeaderWrapper, Logo, NavButton } from "./Header.style";

export default function Header({ refs, scrollToSection }) {
  const handleScroll = (ref) => {
    scrollToSection(ref);
  };

  return (
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
          <NavButton onClick={() => handleScroll(refs.overviewRef)}>
            개요
          </NavButton>
          <NavButton onClick={() => handleScroll(refs.mofIntroRef)}>
            MOF란?
          </NavButton>
          <NavButton onClick={() => handleScroll(refs.chatbotRef)}>
            챗봇에게 질문
          </NavButton>
        </nav>
      </div>
    </HeaderWrapper>
  );
}
