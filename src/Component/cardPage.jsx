import React, { useState, useEffect } from "react";
import CardComponent from "./Card";

export default function CardPage() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://mock-database-f1298.web.app/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        setUserList(data.users);
      })
      .catch((error) => console.error( error));
  }, []);

  console.log("list user", userList);

  return (
    <div>
      <h6> Card User list </h6>
      {userList.map((user) => (
        <CardComponent
          name={user.name}
          title={user.title}
          role={user.role}
          avatar={user.avatar}
          balance={user.balance}
          id={user.id}
        />
      ))}
    </div>
  );
}
