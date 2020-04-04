import React, { Component } from "react";
import * as api from "../Utils/api";

class ArticleVotes extends Component {
  state = {
    newvotes: 0
  };
  updateVotes = votes => {
    api.patchArticlesVotes(votes, this.props.article_id);
    this.setState(currenState => {
      return { newvotes: currenState.newvotes + votes };
    });
  };
  render() {
    const { newvotes } = this.state;
    return (
      <section className={"artvote"}>
        <label> Votes {this.props.votes + newvotes} </label>
        <br />
        <button
          disabled={newvotes > 0}
          onClick={event => {
            this.updateVotes(1);
          }}
        >
          <i class="far fa-thumbs-up"></i>
        </button>
        <button
          disabled={newvotes < 0}
          onClick={event => {
            this.updateVotes(-1);
          }}
        >
          <i class="far fa-thumbs-down"></i>
        </button>
      </section>
    );
  }
}

export default ArticleVotes;
