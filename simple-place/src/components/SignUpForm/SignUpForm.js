import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormikWrapper,
  SubmitButton,
  LogInOptions,
  LogInLink,
  RequiredMessage,
} from "./SignUpForm-styles.js";
import FormInput from "../FormInput/FormInput.js";
import { signUpSchema, logInSchema } from "./Yup.js";
import { useState } from "react";
import { sendUserData } from "../../services/SignUpService.js";

export const SignUpForm = () => {
  const [showLogIn, setShowLogIn] = useState(true);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const swapShowLogIn = () => {
    setShowLogIn(!showLogIn);
  };

  const handleSubmit = (values) => {
    const userData = {
      username: values.username,
      password: values.password,
    };
    const entryType = showLogIn ? "signup" : "login";
    sendUserData(userData, `/api/${entryType}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const message = res.message;
        if (message === "allowed") {
          setShowError(false);
          console.log("allowed");
          return;
        }
        setShowError(true);
        if (message === "exist") {
          setErrorMessage("User with this nickname already exists");
        } else if (message === "wrong password") {
          setErrorMessage("Wrong password. Try again");
        } else if (message === "no user") {
          setErrorMessage("User with this nickname does not exist");
        } else if (message === "catched") {
          setErrorMessage("Unexpected error. Try again");
        }
      });
  };

  return (
    <FormikWrapper>
      <Formik
        initialValues={{ username: "", password: "", passwordConfirmation: "" }}
        onSubmit={(values, { resetForm }) => {
          // resetForm();
          handleSubmit(values);
        }}
        validationSchema={showLogIn ? signUpSchema : logInSchema}
      >
        {(formikProps) => {
          return (
            <Form noValidate>
              {showError && <RequiredMessage>{errorMessage}</RequiredMessage>}
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
