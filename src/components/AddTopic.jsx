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
        <h2>New Topics</h2>
        <label>
          Title
          <input
            value={slug}
            type="text"
            id="slug"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Description
          <input
            value={description}
            type="text"
            id="description"
            placeholder="a brief description of the topic"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddTopic;

// import React, { Component } from "react";
// import * as api from "../Utils/api";
// import "../App.css";

// class AddTopic extends Component {
//   state = { topic: {}, slug: "", description: "" };

//   handleChange = event => {
//     const { id, value } = event.target;

//     this.setState({ [id]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { slug, description } = this.state;
//     api.postTopic(slug, description).then(topic => {
//       this.props.addTopic(topic);
//     });
//     this.setState({
//       slug: "",
//       description: ""
//     });
//   };
//   render() {
//     const { slug, description } = this.state;
//     return (
//       <form className={"addtopicform"} onSubmit={this.handleSubmit}>
//         <h2>New Topics</h2>
//         <label>
//           Title
//           <input
//             value={slug}
//             type="text"
//             id="slug"
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Description
//           <input
//             value={description}
//             type="text"
//             id="description"
//             placeholder="a brief description of the topic"
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default AddTopic;
