import React, { useRef, useState, useEffect } from "react";
import Input from "../components/InputComponent/Input";
import Logo from "../components/Logo";
import styles from "./../login.module.css";
import { Link, useNavigate } from "react-router-dom";
import EyeIcon from "./../assets/EyeIcon";
const initialState = {
  email: "",
  password: "",
};
const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const useForm = () => {
  const [values, setValues] = useState(initialState);
  const Navigate = useNavigate();
  const [errors, setErrors] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const validate = (name) => {
    if (!values[name].trim()) {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required.` }));
      return false;
    } else {
      if (name === "email") {
        if (!emailRegExp.test(values[name])) {
          setErrors((prev) => ({
            ...prev,
            [name]: "Please Enter Valid Email id.",
          }));
          return false;
        } else {
          setErrors((prev) => ({
            ...prev,
            [name]: "",
          }));
          return true;
        }
      } else if (name === "password") {
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values[name])) {
          setErrors((prev) => ({
            ...prev,
            [name]: "Please Enter Valid Password.",
          }));
          return false;
        } else {
          setErrors((prev) => ({
            ...prev,
            [name]: "",
          }));
          return true;
        }
      }
    }
  };
  const changeHandler = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async () => {
    if (!(validate("email") || validate("password"))) return;
    setErrors(initialState);
    try {
      setLoading(true);
      setApiError("");
      const data = await fetch(
        "https://apptesting.docsumo.com/api/v1/eevee/login/",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const parsedData = await data.json();
      if (parsedData.status_code !== 200) {
        throw new Error(JSON.stringify(parsedData));
      } else {
        Navigate(`/${parsedData.data.user.full_name}`);
      }
    } catch (error) {
      const parsed = JSON.parse(error.message);
      setApiError(parsed.error);
      console.log(parsed);
    } finally {
      setLoading(false);
    }
  };
  const formHandler = {
    errors,
    values,
    onChange: changeHandler,
    onSubmit: submitHandler,
    loading,
    apiError,
  };
  return formHandler;
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  useEffect(() => {
    if (emailRef) {
      emailRef.current.focus();
    }
  }, [emailRef]);
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
              marginTop: "0px",
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
            inputProps={{
              name: "email",
              ref: emailRef,
            }}
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
            value={formHandler.values.password}
            inputProps={{
              name: "password",
            }}
            errorText={formHandler.errors.password}
            type={showPassword ? "text" : "password"}
            handleChange={formHandler.onChange}
            EndArdornment={() => (
              <EyeIcon
                onClick={() => setShowPassword((prev) => !prev)}
                fillColor={showPassword ? "#405089" : "#8d8d8d"}
              />
            )}
          />
          <Link className={styles.forgotLink} to="/">
            Forgot Password?
          </Link>
          <button
            disabled={formHandler.loading}
            onClick={formHandler.onSubmit}
            className={styles.loginButton}
          >
            {formHandler.loading && <div className={styles.loginLoader} />}
            {formHandler.loading ? "Logging in..." : "Login"}
          </button>
          <div className={styles.signupText}>
            <span>Don't have an account?&nbsp;&nbsp;</span>
            <Link className={styles.signupLink} to="/">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
