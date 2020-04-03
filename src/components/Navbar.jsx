import React from "react";
import "../App.css";
import { Link } from "@reach/router";

const Navbar = props => {
  return (
    <>
      <nav className={"nav"}>
        <Link to="/">
          <img
            alt="scholarimage"
            src="https://img.icons8.com/nolan/30/google-scholar.png"
          />
        </Link>
        <label>
          {props.currentUser
            ? `Signed in as ${props.currentUser}`
            : "You have not yet signed in..."}
        </label>
        <Link disabled={props.set === false} to={"/articles"}>
          <button disabled={props.set === false}>Home</button>
        </Link>
        {props.topics.map(topic => {
          return (
            <Link key={topic.slug} to={`/articles/topic/${topic.slug}`}>
              <button disabled={props.set === false}>{topic.slug}</button>
            </Link>
          );
        })}
        );
      </nav>
    </>
  );
};

export default Navbar;
