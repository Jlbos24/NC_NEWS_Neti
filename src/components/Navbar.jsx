import React from "react";
import "../App.css";
import { Link } from "@reach/router";

const Navbar = props => {
  return (
    <>
      <nav className={"nav"}>
        <Link to="/">
          <img
            alt="loginimage"
            src="https://img.icons8.com/ios-filled/50/000000/change-user-male.png"
          />
        </Link>
        <Link to="/">
          {props.currentUser
            ? `Signed in as ${props.currentUser}`
            : "You have not yet signed in..."}
        </Link>
        <Link to={"/articles"} disabled={props.set === false}>
          Articles
        </Link>
        {props.topics.map(topic => {
          return (
            <Link key={topic.slug} to={`/articles/topic/${topic.slug}`}>
              /{topic.slug}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;

// import React from "react";
// import "../App.css";
// import { Link } from "@reach/router";

// const Navbar = props => {
//   return (
//     <>
//       <nav className={"nav"}>
//         <Link to="/">
//           <img
//             alt="scholarimage"
//             src="https://img.icons8.com/nolan/30/google-scholar.png"
//           />
//         </Link>
//         <label>
//           {props.currentUser
//             ? `Signed in as ${props.currentUser}`
//             : "You have not yet signed in..."}
//         </label>
//         <Link disabled={props.set === false} to={"/articles"}>
//           <button disabled={props.set === false}>Home</button>
//         </Link>
//         {props.topics.map(topic => {
//           return (
//             <Link key={topic.slug} to={`/articles/topic/${topic.slug}`}>
//               <button disabled={props.set === false}>{topic.slug}</button>
//             </Link>
//           );
//         })}
//         );
//       </nav>
//     </>
//   );
// };

// export default Navbar;
