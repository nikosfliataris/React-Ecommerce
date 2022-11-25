import React from "react";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <main className="Error-page  page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default ErrorPage;
