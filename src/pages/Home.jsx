import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const { name } = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    if (!name) Navigate("/login");
  }, [name]);
  return <div>Home</div>;
};

export default Home;
