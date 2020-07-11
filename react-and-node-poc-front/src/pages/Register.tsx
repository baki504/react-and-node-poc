import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const register = () => {
    console.log("register");
  };
  return (
    <>
      <h1>register</h1>
      <div>
        usename:
        <input />
      </div>
      <div>
        gender:
        <input name="gender" type="radio" value="01" />
        男性
        <input name="gender" type="radio" value="02" />
        女性
      </div>
      <div>
        <Link to="/register">
          <button onClick={register}>登録</button>
        </Link>
      </div>
      <div>
        <Link to="search">Search</Link>
      </div>
    </>
  );
}
