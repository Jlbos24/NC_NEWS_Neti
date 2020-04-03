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
    set: false
  };

  setUser = (currentUser, set) => {
    this.setState({ currentUser, set });
  };

  getTopics = () => {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  };
  componentDidMount() {
    this.getTopics();
  }

  addTopic = topic => {
    this.setState(currentState => {
      return { topics: [topic, ...currentState.topics] };
    });
  };
  addArticle = article => {
    this.setState({ article });
  };

  render() {
    return (
      <div className="App">
        <Title />

        <Navbar
          topics={this.state.topics}
          currentUser={this.state.currentUser}
          set={this.state.set}
        />

        <Router className="routermain">
          <AddTopic path="/addtopics" addTopic={this.addTopic} />
          <Users path="/" setUser={this.setUser} />
          <AllArticles
            path="/articles"
            article={this.state.article}
            currentUser={this.state.currentUser}
            set={this.state.set}
          />
          <AllArticles
            path="/articles/topic/:slug"
            currentUser={this.state.currentUser}
            set={this.state.set}
          />
          <BodyCard
            path="/articles/:article_id/*"
            currentUser={this.state.currentUser}
            set={this.state.set}
          />
          <AddArticle
            path="/addarticle"
            topics={this.state.topics}
            getTopics={this.getTopics}
            addArticle={this.addArticle}
            currentUser={this.state.currentUser}
            set={this.state.set}
          />

          <ErrorHandling default />
        </Router>
      </div>
    );
  }
}

export default App;
