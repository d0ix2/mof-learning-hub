import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 5rem 0; /* py-20 px-4 */
  margin: 0 2.5rem;

  @media (min-width: 768px) {
    padding: 6rem 2rem; /* md:py-24 sm:px-8 */
  }
  background-color: white;
  border-bottom: 1px solid #f3f4f6; /* gray-100 */

  /* 내부 콘텐츠 정렬을 위한 최대 너비 설정 */
  & > div {
    // max-width: 48rem; /* max-w-4xl */
    margin: 0 auto;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  font-family: "DungGeunMo";
  margin-bottom: 2rem; /* mb-8 */
  color: ${(props) => props.theme.color.PRIMARY_DARK};
  border-left: 4px solid ${(props) => props.theme.color.PRIMARY_COLOR};
  padding-left: 1rem; /* pl-4 */
`;
