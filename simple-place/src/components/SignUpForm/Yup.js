import * as yup from "yup";
import { RequiredMessage } from "./SignUpForm-styles";

export const schema = yup.object().shape({
  username: yup
    .string()
    .required(<RequiredMessage>Введите логин</RequiredMessage>)
    .matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, {
      message: <RequiredMessage>Некорректный логин</RequiredMessage>,
    })
    .min(8, <RequiredMessage>Логин слишком короткий</RequiredMessage>)
    .max(20, <RequiredMessage>Логин слишком длинный</RequiredMessage>),
  password: yup
    .string()
    .required(<RequiredMessage>Введите пароль</RequiredMessage>)
    .min(8, <RequiredMessage>Логин слишком короткий</RequiredMessage>)
    .max(25, <RequiredMessage>Логин слишком длинный</RequiredMessage>)
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
      message: <RequiredMessage>Некорректный пароль</RequiredMessage>,
    }),
  passwordConfirmation: yup
    .string()
    .required(<RequiredMessage>Подтвердите пароль!</RequiredMessage>)
    .oneOf(
      [yup.ref("password"), null],
      <RequiredMessage>Пароли должны совпадать</RequiredMessage>
    ),
});
