import styled from "styled-components";

const Header = styled.header`
  display: flex;
  height: ${({ theme }) => theme.layout.header_thickness};
  padding: ${({ theme }) => theme.layout.small_gutter};
  font-family: ${({ theme }) => theme.font.primary};
`;

const Logo = styled.figure`
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;

  ul {
    display: flex;
    margin: 0;

    li:first-child {
      margin-right: ${({ theme }) => theme.layout.small_gutter};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.medium_gray};
      font-weight: ${({ theme }) => theme.font.strong};
      font-size: 1.5rem;
      transition: color 350ms ease-out;

      &:hover {
        color: ${({ theme }) => theme.colors.black};
        transition: color 350ms ease-out;
      }
    }

    .selected {
      color: ${({ theme }) => theme.colors.black};
      transition: color 350ms ease-out;
    }
  }
`;

export { Header, Logo, Nav };
