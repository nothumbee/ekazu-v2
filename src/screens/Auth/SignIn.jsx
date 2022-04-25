import React from "react";
import { useLocation } from "react-router-dom";
import SignInForm from "../../components/Auth/SignInForm";

const SignIn = () => {
  const { search } = useLocation();
  let params = new URLSearchParams(search);
  const redirect = params.get("redirect");

  return <SignInForm redirectPath={redirect} />;
};

export default SignIn;
