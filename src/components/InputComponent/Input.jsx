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
      <label htmlFor="inputField" className={styles.label}>{label}</label>
      <div style={{ display: "flex", alignItems: "center", marginTop: '6px' }}>
        <input
          type={type}
          id='inputField'
          className={styles.input}
          onChange={handleChange}
          {...inputProps}
          placeholder={placeholder}
        />
        {EndArdornment && <EndArdornment />}
      </div>
      {errorText && <span>{errorText}</span>}
    </div>
  );
};
export default Input;
