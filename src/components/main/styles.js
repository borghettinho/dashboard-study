import styled from "styled-components";
import { motion } from "framer-motion";

const Main = styled(motion.main)`
  padding: ${({ theme }) => theme.layout.small_gutter};
  background: ${({ theme }) => theme.colors.light_gray};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export { Main };
