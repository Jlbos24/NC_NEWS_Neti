import React from "react";
import "../App.css";
import loginclear32 from "../images/loginclear32.png";

import { Link } from "@reach/router";

const Navbar = (props) => {
  return (
    <>
      <nav className={"nav"}>
        <Link className={"navavatar"} to="/">
          <img alt="loginimage" src={loginclear32} />
        </Link>
        <Link className={"navhome"} to="/">
          {props.currentUser
            ? `Signed in as ${props.currentUser}`
            : "You have not yet signed in..."}
        </Link>
        <Link to={"/articles"} disabled={props.set === false}>
          Articles
        </Link>
        {props.topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles/topic/${topic.slug}`}>
              /{topic.slug}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
