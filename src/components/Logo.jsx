import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img width="100%" height="100%" src="docsumo.png" alt="docsumo logo" />
    </Link>
  );
};

export default Logo;
