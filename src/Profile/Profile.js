import React from "react";
import { Redirect } from "react-router-dom";

const Profile = props => {
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("username");
  const avatar = localStorage.getItem("avatar");
  console.log("is_login", is_login);

  if (is_login === null) {
    return <Redirect to={{pathname: "/signin"}}/>;
  }
  else {
    return (
      <section>
        <h1>PROFILE</h1>
        <img height="200px" width="200px" src={avatar} alt=""/>
        <p>
          <label>Email:</label> {email}
        </p>
        <p>
          <label>Username:</label> {username}
        </p>
      </section>
    )
  }
};

export default Profile;