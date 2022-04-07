import styled from "styled-components";
import { MainContainer } from "../../App-styles";

export const UserContainer = styled(MainContainer)`
  width: 935px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  padding: 0 0 50px 0;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const Username = styled.span`
  font-size: 28px;
`;

export const UserInfo = styled.section`
  margin: 0 0 0 25px;
`;

export const InfoText = styled.span`
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "400"};
  margin-right: 10px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:not(:first-child) {
    cursor: pointer;
  }
`;

export const Number = styled.span`
  font-weight: 600;
`;

export const AccountInfo = styled.div`
  margin: 25px 0 0 0;
`;

export const Message = styled.span`
  color: #dbdbdb;
  margin: 0 auto;
`;
