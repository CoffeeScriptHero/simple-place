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

  return (
    <FormikWrapper>
      <Formik
        initialValues={{
          login: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          // const fieldsNumber = Object.keys(values).length;
          sendUserData(values).then((res) => {
            if (res.status === 500) {
            }
          });
        }}
        validationSchema={schema}
      >
        {(formikProps) => {
          return (
            <Form noValidate>
              <div>
                <Field
                  component={FormInput}
                  name="login"
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
                  {showLogIn ? "Войти" : "Зарегистрироваться"}
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
