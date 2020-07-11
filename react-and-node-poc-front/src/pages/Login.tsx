import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const login = () => {
    console.log("login service start");
  };
  return (
    <>
      <h1>login</h1>
      <div>
        mail:
        <input />
      </div>
      <div>
        password:
        <input />
      </div>
      <div>
        <Link to="/register">
          <button onClick={login}>ログイン</button>
        </Link>
      </div>
    </>
  );
}
