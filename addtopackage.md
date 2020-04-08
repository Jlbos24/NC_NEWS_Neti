<!-- // },
// "description": "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).",
// "main": "index.js",
// "devDependencies": {},
// "repository": {
// "type": "git",
// "url": "git+https://github.com/Jlbos24/NC_NEWS_Neti.git"
// },
// "keywords": [],
// "author": "",
// "license": "ISC",
// "bugs": {
// "url": "https://github.com/Jlbos24/NC_NEWS_Neti/issues"
// },
// "homepage": "https://github.com/Jlbos24/NC_NEWS_Neti#readme" -->

<!-- ,
  "description": "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).",
  "main": "index.js",
  "devDependencies": {},
  "repository": {
    "type": "git",
    "url": "git+//https://github.com/Jlbos24/NC_NEWS_Neti.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Jlbos24/NC_NEWS_Neti/issues"
  },
  "homepage": "https://github.com/Jlbos24/NC_NEWS_Neti#readme" -->

<!-- ,
  "description": "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).",
  "main": "index.js",
  "devDependencies": {},
  "repository": {
    "type": "git",
    "url": "git+//https://github.com/Jlbos24/NC_NEWS_Neti.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Jlbos24/NC_NEWS_Neti/issues"
  },
  "homepage": "https://github.com/Jlbos24/NC_NEWS_Neti#readme" -->

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxx

<!--
  handleSignIn = () => {
    const currentUser = this.state.currentUser;
    const set = this.state.set;
    localStorage.setItem("currentUser", currentUser); //JSON.stringify(currentUser));
    localStorage.setItem("set", set);
    console.log(localStorage, "handleSignIN");
    console.log(localStorage.currentUser, " storage in users handlesign in");
    //this.props.setUser(this.state.currentUser, this.state.set);
  }; -->

Compount didmoint - app
// const currentUser = localStorage.getItem("currentUser") || "";
// const set = localStorage.getItem("set") || false;

    //   console.log(currentUser, "before setstate state in did mount");
    //   //   console.log(currentUser, set, " after if");
    //   if (this.state.currentUser !== currentUser) {
    //     this.setState({
    //       currentUser: currentUser,
    //       set: set,
    //     });
    //   }
    //   console.log(this.state.currentUser, "after setstate in DidMount");
    //

      componentDidUpdate(prevProps, prevState) {
    const currentUser = localStorage.getItem("currentUser");
    console.log(localStorage.currentUser, " storage");
    console.log(currentUser, " in didupdate");
    const set = localStorage.getItem("set");
    console.dir(prevProps, "prevProps");
    console.dir(prevState, "prevstata");
    if (prevState.currentUser !== currentUser) {
      //localStorage.clear();
      this.setState({
        currentUser: currentUser,
        set: set,
      });
    }

}
