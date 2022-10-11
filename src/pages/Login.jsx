import React, { useState } from "react";
import Input from "../components/InputComponent/Input";
import Logo from "../components/Logo";
import styles from "./../login.module.css";
import { Link } from "react-router-dom";
const initialState = {
  email: "",
  password: "",
};
const useForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const changeHandler = (e) => {};
  const submitHandler = () => {};
  const formHandler = {
    errors,
    values,
    onChange: changeHandler,
    onSubmit: submitHandler,
    loading,
    apiError: "some random",
  };
  return formHandler;
};
const Login = () => {
  const formHandler = useForm();
  return (
    <div className={styles.Wrapper}>
      <div className={styles.loginWrapper}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.loginBox}>
          <h1
            style={{
              color: "#181818",
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "7px",
            }}
          >
            Login to your Docsumo account
          </h1>

          <div
            className={
              formHandler.apiError
                ? styles.apierrortext
                : styles.hide_apiErrorText
            }
          >
            {formHandler.apiError}
          </div>

          <Input
            divProps={{
              style: {
                marginTop: "7px",
              },
            }}
            label="Work Email"
            placeholder="janedoe@abc.com"
            value={formHandler.values.email}
            errorText={formHandler.errors.email}
            type="email"
            handleChange={formHandler.onChange}
          />
          <Input
            label="Password"
            divProps={{
              style: {
                marginTop: "28px",
              },
            }}
            placeholder="Enter password here..."
            value={formHandler.values.email}
            errorText={formHandler.errors.email}
            type="email"
            handleChange={formHandler.onChange}
          />
          <Link className={styles.forgotLink} to="/">
            Forgot Password?
          </Link>
          <button className={styles.loginButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
