import styled from "styled-components";

export const FormikWrapper = styled.div`
  width: 300px;
`;

export const RequiredMessage = styled.p`
  color: red;
  font-size: 16px;
  margin: 0;
  text-align: center;
  font-weight: 500;
`;

export const LogInOptions = styled.div`
  color: #0009;
  text-align: center;
  font-weight: 500;
`;

export const LogInLink = styled.a.attrs((props) => ({
  href: props.href || "#",
}))`
  color: #5551ff;
  text-decoration: none;
  margin-left: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: "submit",
  value: "submit",
})`
  background: #000;
  color: #fff;
  cursor: pointer;
  margin: 8px 0 15px 0;
  text-transform: uppercase;
  width: 100%;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: transform 0.2s;
  transform: translate(0);
  text-align: center;
  font-family: sans-serif;
  &:hover:not(:disabled):not(:active) {
    transform: translateY(-2px);
  }
`;
