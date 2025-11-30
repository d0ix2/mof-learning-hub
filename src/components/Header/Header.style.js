import styled from "styled-components";

// 헤더
export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-bottom: 1px solid #e0e7ff; /* indigo-100 */
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.color.PRIMARY_COLOR};
  cursor: pointer;
`;

export const NavButton = styled.button`
  color: #4b5563; /* gray-600 */
  background: none;
  border: none;
  &:hover {
    color: ${(props) => props.theme.color.PRIMARY_COLOR};
  }
  transition: color 0.2s;
  font-weight: 500;
  padding: 0.25rem 0;
  cursor: pointer;
`;
