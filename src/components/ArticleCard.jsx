import React from "react";
import "../App.css";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const date = new Date(props.created_at).toDateString();

  const handleClick = () => {
    props.delArticle(props.article_id);
  };
  return (
    <article className={"artCard"}>
      <Link to={`/articles/${props.article_id}`}>
        <h2 className={"arth2"}>{props.title}</h2>
      </Link>
      <p>Article Info...</p>
      <ul>
        The Topic Category is {props.topic}
        <br />
        The author for this is {props.author}
        <br />
        {props.comment_count} Comments on this article
        <br />
        {props.votes} Votes for this article
        <br />
        Written on {date}
      </ul>

      <button
        className={"delArtbtn"}
        disabled={props.currentUser !== props.author}
        onClick={handleClick}
      >
        Delete Article
      </button>
    </article>
  );
};

export default ArticleCard;
