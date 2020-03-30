import React, { Component } from "react";
import * as api from "../Utils/api";

class CommentVotes extends Component {
  state = {
    newvotes: 0
  };

  updateVotes = inc_votes => {
    api.patchCommentVotes(inc_votes, this.props.comment_id);
    this.setState(currentState => {
      return { newvotes: currentState.newvotes + inc_votes };
    });
  };
  render() {
    const { newvotes } = this.state;
    return (
      <section className={"commentvotes"}>
        <label> Votes {this.props.votes + newvotes} </label>
        <button
          disabled={newvotes > 0}
          onClick={event => {
            this.updateVotes(1);
          }}
        >
          Agree
        </button>
        <button
          disabled={newvotes < 0}
          onClick={event => {
            this.updateVotes(-1);
          }}
        >
          Disagree
        </button>
      </section>
    );
  }
}

export default CommentVotes;
