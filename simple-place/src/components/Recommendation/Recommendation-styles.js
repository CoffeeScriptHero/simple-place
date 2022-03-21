import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 0 12px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Username = styled.span`
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
`;

export const SubscribeButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #5551ff;
`;
