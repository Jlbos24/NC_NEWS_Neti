import React, { Component } from "react";
import Loader from "./Loader";
import ArticleCard from "./ArticleCard.jsx";
import * as api from "../Utils/api";
import "../App.css";
import Toolbar from "./Toolbar";
import ErrorHandling from "./ErrorHandling";
import Users from "./Users";

class AllArticles extends Component {
  state = {
    articles: [],
    isLoading: true,

    error: null,
  };

  getArticles = (sort_by, order) => {
    api
      .fetchArticles(this.props.slug, sort_by, order)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((error) => {
        const status = error.response.status;
        const message = error.response.data.msg;
        this.setState({ error: { status, message }, isLoading: false });
      });
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slug !== this.props.slug) {
      this.getArticles();
    }
  }

  delArticle = (article_id, sort_by, order) => {
    api.deleteArticle(article_id).then(() => {
      this.getArticles(sort_by, order);
    });
  };

  updateArticle = () => {
    this.setState((currentState) => {
      return { articles: [this.props.article, ...currentState.articles] };
    });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.props.set === false) return <Users />;
    if (this.state.error) return <ErrorHandling {...this.state.error} />;
    return (
      <main className={"artmain"}>
        <Toolbar getArticles={this.getArticles} />
        {this.state.articles.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              {...article}
              currentUser={this.props.currentUser}
              delArticle={this.delArticle}
            />
          );
        })}
      </main>
    );
  }
}

export default AllArticles;
