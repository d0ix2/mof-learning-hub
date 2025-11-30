import React from "react";

import { SectionWrapper, SectionTitle } from "./Section.style";

const Section = React.forwardRef(({ id, title, children }, ref) => (
  <SectionWrapper id={id} ref={ref}>
    <div className="max-w-4xl mx-auto">
      {" "}
      {/* 내부 콘텐츠 영역 */}
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  </SectionWrapper>
));
Section.displayName = "Section";

export default Section;
