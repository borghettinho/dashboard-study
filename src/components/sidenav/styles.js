import styled from "styled-components";

const SideNav = styled.aside`
  padding: ${({ theme }) => theme.layout.small_gutter};
  width: ${({ theme }) => theme.layout.header_thickness};
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
`;

const Logo = styled.figure`
  margin: 0;
`;

const MainNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
  }
`;

const BottomNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
  }
`;

export { SideNav, Logo, MainNav, BottomNav };
