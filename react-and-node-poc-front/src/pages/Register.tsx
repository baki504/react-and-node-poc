import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default function Register() {
  const register = async () => {
    await axios
      .get("http://localhost:8081")
      .then((response) => console.log(response));
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
        male
        <input name="gender" type="radio" value="02" />
        female
      </div>
      <div>
        <Link to="/register">
          <button onClick={register}>regist</button>
        </Link>
      </div>
      <div>
        <Link to="search">Search</Link>
      </div>
    </>
  );
}
