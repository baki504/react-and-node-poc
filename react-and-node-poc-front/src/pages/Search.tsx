import React, { useEffect, useState } from "react";
import { User } from "./User";
import { Link } from "react-router-dom";

const users = [
  new User("01", "tanaka", "01"),
  new User("02", "suzuki", "01"),
  new User("03", "satoh", "02"),
];

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState<User[]>([]);
  const search = (searchText: string) => {
    console.log("search");
    users.forEach((user) => {
      if (searchText === user.userName) {
        setSearchResult([user]);
      }
    });
  };

  useEffect(() => {
    setSearchResult(users);
  }, []);

  return (
    <>
      <h1>Search</h1>
      <div>
        usename:
        <input onChange={(event) => setSearchText(event.target.value)} />
        <button onClick={() => search(searchText)}>search</button>
      </div>
      <div>
        <table>
          <tr>
            <th>userId</th>
            <th>userName</th>
            <th>gender</th>
          </tr>
          {searchResult.map((user, index) => {
            return (
              <>
                <tr>
                  <td>
                    <Link to={`/detail/${user.userId}`}>{user.userId}</Link>
                  </td>
                  <td>{user.userName}</td>
                  <td>{user.gender}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
      <div>
        <Link to="register">Register</Link>
      </div>
    </>
  );
}
