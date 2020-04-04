import React, { Component } from "react";
import * as api from "../Utils/api";
import "../App.css";

class AddTopic extends Component {
  state = { topic: {}, slug: "", description: "" };

  handleChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { slug, description } = this.state;
    api.postTopic(slug, description).then(topic => {
      this.props.addTopic(topic);
    });
    this.setState({
      slug: "",
      description: ""
    });
  };
  render() {
    const { slug, description } = this.state;
    return (
      <form className={"addtopicform"} onSubmit={this.handleSubmit}>
        <h2>New Topics...</h2>
        <input
          value={slug}
          type="text"
          id="slug"
          name="slug"
          placeholder="Your topic slug..."
          required
          onChange={this.handleChange}
        />

        <input
          value={description}
          type="text"
          id="description"
          name="description"
          placeholder="A brief description of the topic..."
          required
          onChange={this.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddTopic;
