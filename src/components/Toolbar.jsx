import React from "react";
import { Link } from "@reach/router";
import "../App.css";

const SortArticles = props => {
  const handleChange = event => {
    const sort_by = event.target.value;

    props.getArticles(sort_by);
  };

  return (
    <>
      <section className={"sortmain"}>
        <label> Sort Articles By </label>
        <select name="type" onChange={handleChange}>
          <option value="">Select</option>
          <option value="created_at">Date Created</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>

        <ul>
          "want more...check out these resources"
          <li>
            <a href="https://devchat.tv/js-jabber/">
              JS-Jabber Podcast to go with the your coding articles
            </a>
          </li>
          <li>
            <a href="https://talksport.com/football/">
              Some talkSport for your footie articles
            </a>
          </li>
          <li>
            <a href="https://thefoodmedic.co.uk/">Help food medic!</a>
          </li>
        </ul>
        <Link to="/addtopics">
          <button>Add a new topic here...</button>
        </Link>
        <Link to="/addarticle">
          <button>Write an Article here...</button>
        </Link>
      </section>
    </>
  );
};

export default SortArticles;
