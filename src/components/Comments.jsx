import React, { Component } from "react";
import * as api from "../Utils/api";
import Loader from "./Loader";
import ErrorHandling from "./ErrorHandling";
import "../App.css";
import CommentVotes from "./CommentVotes";
import CommentBox from "./CommentBox";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: null,
    body: ""
  };

  getComments = () => {
    api
      .fetchComments(this.props.article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(error => {
        const status = error.response.status;
        const message = error.response.data.msg;
        this.setState({ error: { status, message }, isLoading: false });
      });
  };
  componentDidMount() {
    this.getComments();
  }
  addComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  delComment = id => {
    api.deleteComment(id).then(() => {
      this.getComments();
    });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.error) return <ErrorHandling {...this.state.error} />;

    return (
      <>
        <CommentBox
          addComment={this.addComment}
          updateCommentCount={this.props.updateCommentCount}
          currentUser={this.props.currentUser}
          article_id={this.props.article_id}
        />

        <article className="commentsarticle" key={this.props.id}>
          {this.state.comments.map((comment, i) => {
            const date = new Date(comment.created_at).toDateString();

            return (
              <section className="commentsbody" key={i}>
                <h6 key={comment.id}>
                  {comment.author}, {date}, Votes {comment.votes}
                </h6>
                <p key={comment.comment_id}>"{comment.body}"</p>
                <CommentVotes {...comment} />
                <br />
                <button
                  className={"delbtn"}
                  disabled={this.props.currentUser !== comment.author}
                  onClick={() => {
                    this.props.updateCommentCount(-1);
                    this.delComment(comment.comment_id);
                  }}
                >
                  Delete
                </button>
              </section>
            );
          })}
        </article>
      </>
    );
  }
}

export default Comments;
