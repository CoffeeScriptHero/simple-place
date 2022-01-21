import React from "react";
import { Formik, Form, Field } from "formik";
import {
  FormikWrapper,
  SubmitButton,
  LogInOptions,
  LogInLink,
} from "./SignUpForm-styles.js";
import FormInput from "../FormInput/FormInput.js";
import { schema } from "./Yup.js";
import { useState } from "react";
import { sendUserData } from "../../services/SignUpService.js";

export const SignUpForm = () => {
  const [showLogIn, setShowLogIn] = useState(true);
  const [showError, setError] = useState(false);

  const swapShowLogIn = () => {
    setShowLogIn(!showLogIn);
  };

  const signUpInitialValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  const logInInitialValues = {
    username: "",
    password: "",
  };

  return (
    <FormikWrapper>
      <Formik
        initialValues={{
          username: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          sendUserData(values)
            .then((res) => {
              console.log(res);
              // if (res.status === 200) {
              //   console.log(values);
              //   // document.cookie =
              //   // username + "=" + encodeURIComponent(v);
              //   alert(document.cookie);
              //   return
              // }
              return res.json();
            })
            .then((res) => console.log(res));
        }}
        validationSchema={schema}
      >
        {(formikProps) => {
          return (
            <Form noValidate>
              <div>
                <Field
                  component={FormInput}
                  name="username"
                  type="text"
                  placeholder="Введите логин"
                />
              </div>
              <div>
                <Field
                  component={FormInput}
                  name="password"
                  type="password"
                  placeholder="Введите пароль"
                />
              </div>
              {showLogIn && (
                <div>
                  <Field
                    component={FormInput}
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Подтвердите пароль"
                  />
                </div>
              )}
              <div>
                <SubmitButton>
                  {showLogIn ? "Зарегистрироваться" : "Войти"}
                </SubmitButton>
              </div>
              <LogInOptions>
                {showLogIn ? "Already have an account?" : "No account?"}
                <LogInLink onClick={swapShowLogIn}>
                  {showLogIn ? "Log in" : "Sign up"}
                </LogInLink>
              </LogInOptions>
            </Form>
          );
        }}
      </Formik>
    </FormikWrapper>
  );
};

export default SignUpForm;
