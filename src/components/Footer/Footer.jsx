import { FooterWrapper } from "./Footer.style";

export default function Footer() {
  return (
    <FooterWrapper>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        &copy; 2025 MOF Learning Hub. All rights reserved. |{" "}
        <span style={{ fontWeight: 600 }}>Powered by Azure AI & React.</span>
      </div>
    </FooterWrapper>
  );
}
