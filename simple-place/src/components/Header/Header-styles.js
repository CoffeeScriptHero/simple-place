import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #e7e7e7;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 150px;
`;

export const IconLink = styled(Link)`
  width: 24px;
  height: 24px;
  z-index: 100;
`;
