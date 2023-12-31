import { useRouter } from "next/router";
import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthPage = () => {
  const urlMode = useRouter().query.mode;
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl">{urlMode === "login" ? "Login" : "Signup"} Please! Jaldi kar</h2>
      {urlMode === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthPage;
