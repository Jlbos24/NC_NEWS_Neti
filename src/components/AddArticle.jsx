import React, { Component } from "react";
import * as api from "../Utils/api";

class AddArticle extends Component {
  state = {
    article: {},
    topics: [],
    title: "",
    body: "",
    topic: ""
  };
  fetchTopic = () => {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  };
  componentDidMount() {
    this.fetchTopic();
  }
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, topic } = this.state;

    api
      .postArticle(title, body, topic, this.props.currentUser)
      .then(article => {
        this.props.addArticle(article);
      });
    this.setState({
      title: "",
      body: "",
      topic: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="addarticle">
        <label>
          Your title
          <input id="title" type="text" onChange={this.handleChange} required />
        </label>

        <input
          placeholder="tell us your story"
          id="body"
          type="text"
          onChange={this.handleChange}
          required
        />

        <label> Topic </label>
        <select id={"topic"} name="type" onChange={this.handleChange}>
          <option value="" disabled selected hidden>
            Select
          </option>
          {this.state.topics.map(topic => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>

        <button>Submit</button>
      </form>
    );
  }
}

export default AddArticle;
