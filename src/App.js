import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import AllArticles from "./components/AllArticles";
import BodyCard from "./components/BodyCard";
import Users from "./components/Users";
import ErrorHandling from "./components/ErrorHandling";
import AddTopic from "./components/AddTopic";
import * as api from "./Utils/api";
import AddArticle from "./components/AddArticle";

class App extends Component {
  state = {
    topics: [],
    article: {},
    currentUser: "",
  };
  componentDidMount() {
    const currentUser = localStorage.getItem("currentUser");

    this.setState({ currentUser });
    this.getTopics();
  }

  getTopics = () => {
    api.fetchTopics().then((topics) => {
      this.setState({ topics });
    });
  };

  addTopic = (topic) => {
    this.setState((currentState) => {
      return { topics: [topic, ...currentState.topics] };
    });
  };
  addArticle = (article) => {
    this.setState({ article });
  };

  render() {
    return (
      <div className="App">
        <Title />

        {this.state.currentUser ? (
          <Navbar
            topics={this.state.topics}
            currentUser={this.state.currentUser}
            currentAvatar={this.state.currentAvatar}
          />
        ) : null}
        <Router className="routermain">
          <AddTopic path="/addtopics" addTopic={this.addTopic} />
          <Users path="/" setUser={this.setUser} />
          <AllArticles
            path="/articles"
            article={this.state.article}
            currentUser={this.state.currentUser}
          />
          <AllArticles
            path="/articles/topic/:slug"
            currentUser={this.state.currentUser}
          />
          <BodyCard
            path="/articles/:article_id/*"
            currentUser={this.state.currentUser}
          />
          <AddArticle
            path="/addarticle"
            topics={this.state.topics}
            getTopics={this.getTopics}
            addArticle={this.addArticle}
            currentUser={this.state.currentUser}
          />

          <ErrorHandling default />
        </Router>
      </div>
    );
  }
}

export default App;
