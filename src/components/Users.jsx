import React, { Component } from "react";
import * as api from "../Utils/api";
import "../App.css";

import { Link } from "@reach/router";
import ErrorHandling from "./ErrorHandling";

class Users extends Component {
  state = {
    users: [],
    currentUser: "",
    navigate: false,
    set: false,
    newUsername: "",
    newName: "",
    newAvatar: "",
    created: false,
    isLoading: true,
    error: null,
  };

  getUsers = () => {
    api
      .fetchUsers()
      .then((users) => {
        this.setState({ users, isLoading: false });
      })
      .catch((error) => {
        const status = error.response.status;
        const message = error.response.data.msg;
        this.setState({ error: { status, message }, isLoading: false });
      });
  };
  componentDidMount() {
    this.getUsers();
  }
  addUser = (user) => {
    this.setState((currentState) => {
      return { users: [user, ...currentState.users] };
    });
  };
  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      currentUser: value,
      set: true,
    });
  };
  handleSignIn = () => {
    localStorage.setItem("currentUser", this.state.currentUser);
  };
  handleSignOut = () => {
    localStorage.clear("currentUser");
    this.setState({
      set: false,
    });
  };
  handleUserCreateChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { newUsername, newName, newAvatar } = this.state;
    api.postUser(newUsername, newName, newAvatar).then((user) => {
      this.addUser(user);
      this.setState({
        newUsername: "",
        newName: "",
        newAvatar: "",
        created: true,
      });
    });
  };
  render() {
    if (this.state.error) return <ErrorHandling {...this.state.error} />;

    const { newUsername, newName, newAvatar } = this.state;
    return (
      <>
        <main className={"usersMain"}>
          <h3 className={"loginh3"}>Sign In</h3>
          <section className={"users-select"}>
            <select className={"userdrop"} onChange={this.handleChange}>
              <option disabled selected hidden>
                Select User
              </option>
              {this.state.users.map((user) => {
                return (
                  <option key={user.username} value={user.username}>
                    {user.username}
                  </option>
                );
              })}
            </select>
          </section>
          <br />
          <Link to={"/articles"}>
            <button
              disabled={this.state.set === false}
              className={"sign-io-btn"}
              onClick={this.handleSignIn}
            >
              {this.state.set ? "Sign In" : "You havent selected your user"}
            </button>
          </Link>
          <br />
          <Link to={"/"}>
            <button className={"sign-io-btn"} onClick={this.handleSignOut}>
              Sign Out
            </button>
          </Link>
          <form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>
            <p>
              {this.state.created
                ? this.state.newUsername + "Created!!!"
                : "Please fill in this form to create a user."}
            </p>
            <label htmlFor="newUsername">
              Username:
              <br />
              <input
                className="crteurinput"
                value={newUsername}
                type="text"
                name="newUsername"
                placeholder="Enter a username"
                id="newUsername"
                required
                onChange={this.handleUserCreateChange}
              />
            </label>
            <br />
            <label htmlFor="newName">
              Name:
              <br />
              <input
                className="crteurinput"
                value={newName}
                type="text"
                name="newName"
                placeholder="Enter your name"
                id="newName"
                required
                onChange={this.handleUserCreateChange}
              />
            </label>
            <br />
            <label htmlFor="newAvatar">
              Avatar:
              <br />
              <input
                className="crteurinput"
                value={newAvatar}
                type="text"
                name="newAvatar"
                placeholder="Add your Avatar"
                id="newAvatar"
                required
                onChange={this.handleUserCreateChange}
              />
            </label>
            <br />
            <button className="createbtn" type="submit">
              Create
            </button>
          </form>
        </main>
      </>
    );
  }
}

export default Users;
