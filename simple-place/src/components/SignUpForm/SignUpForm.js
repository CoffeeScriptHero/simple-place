import React from "react";
import { Formik, Form, Field } from "formik";
import {
  FormikWrapper,
  SignUpLogo,
  SubmitButton,
  LogInOptions,
  LogInLink,
  RequiredMessage,
} from "./SignUpForm-styles.js";
import FormInput from "../FormInput/FormInput.js";
import { signUpSchema, logInSchema } from "./Yup.js";
import { useState } from "react";
import { sendUserData } from "../../services/UserService.js";
import { getCookie, setCookie } from "../../services/CookiesService.js";
import { userOperations } from "../../store/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader.js";

export const SignUpForm = ({}) => {
  const [showLogIn, setShowLogIn] = useState(true);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const swapShowLogIn = () => {
    setShowError(false);
    setShowLogIn(!showLogIn);
  };

  const handleSubmit = (values) => {
    const userData = {
      username: values.username,
      password: values.password,
    };
    const entryType = showLogIn ? "signup" : "login";
    sendUserData(userData, `/api/registration/${entryType}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const message = res.message;

        if (message === "allowed") {
          setShowError(false);
          dispatch(
            userOperations.setNewUser({
              user: values.username,
              id: res.id,
              profileImg: res.profileImg,
              following: res.following,
              followers: res.followers,
              posts: res.posts,
            })
          );
          setCookie("username", values.username, {
            expires: new Date("12/31/40"),
          });
          setCookie("id", res.id, { expires: new Date("12/31/40") });
          navigate("/");
          return;
        }

        setShowError(true);
        setErrorMessage(message);
      });
  };

  if (getCookie("id")) return <Loader />;

  return (
    <FormikWrapper>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{ username: "", password: "", passwordConfirmation: "" }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={showLogIn ? signUpSchema : logInSchema}
      >
        {(formikProps) => {
          return (
            <Form noValidate>
              <SignUpLogo>SimplePlace</SignUpLogo>
              {showError && <RequiredMessage>{errorMessage}</RequiredMessage>}
              <div>
                <Field
                  bdColor={formikProps.errors.username ? "red" : "black"}
                  component={FormInput}
                  name="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div>
                <Field
                  bdColor={formikProps.errors.password ? "red" : "black"}
                  component={FormInput}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              {showLogIn && (
                <div>
                  <Field
                    bdColor={
                      formikProps.errors.passwordConfirmation ? "red" : "black"
                    }
                    component={FormInput}
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Confirm password"
                  />
                </div>
              )}
              <div>
                <SubmitButton>
                  {showLogIn ? "Create account" : "Log in"}
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
