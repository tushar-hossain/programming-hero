import React, { use, useState } from "react";

const Users = ({ userPromise }) => {
  const initialUser = use(userPromise);
  const [user, setUser] = useState(initialUser);

  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const newUser = { name, email };

    //   post user server and add
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => setUser([...user, data]));
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <div>
        {user.map((newUser) => (
          <div key={newUser.id}>
            <p>
              {newUser.name} : {newUser.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
