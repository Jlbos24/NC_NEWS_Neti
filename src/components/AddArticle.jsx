import React, { Component } from "react";
import * as api from "../Utils/api";
import ErrorHandling from "./ErrorHandling";

class AddArticle extends Component {
  state = {
    article: {},
    title: "",
    body: "",
    topic: "",
    error: false,
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, body, topic } = this.state;

    api
      .postArticle(title, body, topic, this.props.currentUser)
      .then((article) => {
        this.props.addArticle(article);
      });
    this.setState({ title: "", body: "", topic: "" });
  };

  render() {
    if (this.state.error) return <ErrorHandling {...this.state.error} />;
    return (
      <form onSubmit={this.handleSubmit} className="addarticle">
        <h2>What do you have to say??</h2>
        <input
          id="title"
          type="text"
          placeholder={"Your title..."}
          onChange={this.handleChange}
          required
        />

        <textarea
          rows="5"
          placeholder="tell us your story"
          id="body"
          type="text"
          onChange={this.handleChange}
          required
        />

        <select id={"topic"} name="type" onChange={this.handleChange}>
          <option value="" disabled selected hidden>
            Select a topic
          </option>
          {this.props.topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddArticle;
