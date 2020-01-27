import styled from "styled-components";

const Card = styled.article`
  padding: ${({ theme }) => theme.layout.small_gutter};
  min-width: 25%;
  min-height: 25%;
  border-radius: ${({ theme }) => theme.layout.border_radius};
  background-color: ${({ theme }) => theme.colors.white};
`;

export { Card };
