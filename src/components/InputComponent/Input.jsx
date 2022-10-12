import React from "react";
import styles from "./input.module.css";
const Input = ({
  label,
  errorText,
  type,
  handleChange,
  placeholder,
  EndArdornment,
  inputProps,
  divProps,
}) => {
  return (
    <div {...divProps}>
      <label htmlFor="inputField" className={styles.label}>
        {label}
      </label>
      <div style={{ display: "flex", alignItems: "center", marginTop: "6px" }}>
        <input
          type={type}
          id="inputField"
          className={errorText ? `${styles.input} ${styles.inputError}` : styles.input}
          onChange={handleChange}
          {...inputProps}
          placeholder={placeholder}
        />
        {EndArdornment && (
          <span style={{ marginLeft: "-28px", cursor: "pointer" }}>
            <EndArdornment />
          </span>
        )}
      </div>
      {errorText && (
        <span
          style={{
            marginTop: "8px",
            color: "#c2004f",
            font: "normal normal 14px/1.5 Lato,sans-serif",
          }}
        >
          {errorText}
        </span>
      )}
    </div>
  );
};
export default Input;
