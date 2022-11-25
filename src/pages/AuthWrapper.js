import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./AuthWrapper.scss";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) return <main className="auth-wrapper">Loading...</main>;
  if (error)
    return (
      <main className="auth-wrapper">Error 404, Something went wrong </main>
    );
  return <>{children}</>;
};

export default AuthWrapper;
