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

class App extends Component {
  state = {
    topics: [],
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

  render() {
    return (
      <div className="App">
        <Title />

        <Navbar
          {...this.state}
          currentUser={this.state.currentUser}
          set={this.state.set}
        />

        <Router className="routermain">
          <AddTopic path="/addtopics" addTopic={this.addTopic} />
          <Users path="/" setUser={this.setUser} />
          <AllArticles
            path="/articles"
            currentUser={this.state.currentUser}
            set={this.state.set}
          />
          <AllArticles
            path="/articles/addarticle"
            getTopics={this.getTopics}
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

          <ErrorHandling default />
        </Router>
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import { Link, Router } from "@reach/router";
// import * as api from "../Utils/api";
// import "../App.css";
// import AddTopic from "./AddTopic";

// class Navbar extends Component {
//   state = { topics: [] };

//   getTopics = () => {
//     api.fetchTopics().then(topics => {
//       this.setState({ topics });
//     });
//   };

//   addTopic = topic => {
//     this.setState(currentState => {
//       return { topics: [topic, ...currentState.topics] };
//     });
//   };

//   componentDidMount() {
//     this.getTopics();
//   }

//   render() {
//     return (
//       <>
//         <nav className={"nav"}>
//           <Link to="/">
//             <img
//               alt="scholarimage"
//               src="https://img.icons8.com/nolan/30/google-scholar.png"
//             />
//           </Link>
//           <label>
//             {this.props.currentUser
//               ? `Signed in as ${this.props.currentUser}`
//               : "You have not yet signed in..."}
//           </label>
//           <Link disabled={this.props.set === false} to={"/articles"}>
//             <button disabled={this.props.set === false}>Home</button>
//           </Link>
//           {this.state.topics.map(({ slug }) => {
//             return (
//               <Link key={slug} to={`/articles/topic/${slug}`}>
//                 <button disabled={this.props.set === false}>{slug}</button>
//               </Link>
//             );
//           })}
//         </nav>
//         <Router>
//           <AddTopic
//             path="/topics"
//             currentUser={this.state.currentUser}
//             set={this.state.set}
//             addTopic={this.addTopic}
//           />
//         </Router>
//       </>
//     );
//   }
// }

// export default Navbar;
