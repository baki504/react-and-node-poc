import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { User } from "./User";

const users = [
  new User("01", "tanaka", "01"),
  new User("02", "suzuki", "01"),
  new User("03", "satoh", "02"),
];

export default function Detail() {
  const { id } = useParams();
  const [user, setUser] = useState(new User("", "", ""));

  const fetchUser = (userId: string): User => {
    let fetchedUser = new User("", "", "");
    users.forEach((user) => {
      console.log(user.userId);
      if (user.userId === userId) {
        console.log(userId);
        fetchedUser = user;
      }
    });
    return fetchedUser;
  };

  useEffect(() => {
    const displayUser = fetchUser(id);
    setUser(displayUser);
  }, [id]);

  return (
    <>
      <h1>Detail</h1>
      <div>
        <ul>
          <li>id:{user.userId}</li>
          <li>name:{user.userName}</li>
          <li>gender:{user.gender === "01" ? "男性" : "女性"}</li>
        </ul>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/search">Search</Link>
      </div>
    </>
  );
}
