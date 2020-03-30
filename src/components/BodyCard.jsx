import React, { Component } from "react";
import * as api from "../Utils/api";
import Loader from "./Loader";
import { Link, Router } from "@reach/router";
import Comments from "./Comments";
import ArticleVotes from "./ArticleVotes";
import ErrorHandling from "./ErrorHandling";
import Users from "./Users";
import "../App.css";

class BodyCard extends Component {
  state = {
    article: {},
    isLoading: true,
    count: 0
  };

  getArticleByID = () => {
    api
      .fetchArticleByID(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(error => {
        const status = error.response.status;
        const message = error.response.data.msg;
        this.setState({ error: { status, message }, isLoading: false });
      });
  };
  componentDidMount() {
    this.getArticleByID();
  }

  updateCommentCount = count => {
    this.setState(currentState => {
      return { count: currentState.count + count };
    });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.props.set === false) return <Users />;
    if (this.state.error) return <ErrorHandling {...this.state.error} />;
    const {
      article_id,
      title,
      author,
      body,
      created_at,
      comment_count
    } = this.state.article;
    const date = new Date(created_at).toDateString();

    return (
      <>
        <article className="bodycard" key={article_id}>
          <h2>{title}...</h2>
          <p>{body}</p>
          <h5>
            Written by {author}
            <br />
            {date}
            <br />
            <br />
            <Link to={`/articles/${article_id}/comments`}>
              comments({Number(comment_count) + this.state.count})
            </Link>
            <br />
            <ArticleVotes {...this.state.article} />
          </h5>
        </article>
        <section>
          <Router>
            <Comments
              path="/comments"
              article_id={article_id}
              comment_count={comment_count}
              currentUser={this.props.currentUser}
              set={this.props.set}
              updateCommentCount={this.updateCommentCount}
            />
          </Router>
        </section>
      </>
    );
  }
}

export default BodyCard;
