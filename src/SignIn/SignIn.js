import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Signin extends Component {
  state = { username: "", password: "" };
  changeInput = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  postLogin = () => {
    const {username, password} = this.state;
    const data = {
      username:username,
      password:password
    };
    const self = this;
    axios
    .post("https://api-todofancy.herokuapp.com/api/auth", data)
    .then(function(response){
      console.log(response.data);
        localStorage.setItem("username", response.data.user_data.username);
        localStorage.setItem("is_login", true);
        localStorage.setItem("email", response.data.user_data.email);
        localStorage.setItem("avatar", response.data.user_data.avatar);
        self.props.history.push("/profil")
    })
    .catch(function(error){
      console.log(error);
    });
  };
  render(){
    console.log("state", this.state);
    return(
      <section className="content signin">
        <form onSubmit={e => e.preventDefault()}>
          <h4>SignIn</h4>
          <div>
            <input type="text" name="username" placeholder="Username" onChange={e => this.changeInput(e)}/>
            <input type="text" name="password" placeholder="Password" onChange={e => this.changeInput(e)}/>
          </div>
          <button onClick={() => this.postLogin()}>SignIn</button>
          <button type="reset">Reset</button>
        </form>
      </section>
    );
  }
}
  
export default withRouter(Signin);
