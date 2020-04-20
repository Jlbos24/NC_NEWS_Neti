return (
  !this.state.isAuthenticating && (
    <div className={"App"}>
      <Router>
        <div>
          <Navbar auth={authProps} />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Login {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/register"
              render={(props) => (
                <Register auth={authProps} {...props} userProps={this.props} />
              )}
            />
            <Route
              exact
              path="/home"
              render={(props) => <Home auth={authProps} {...props} />}
            />
            <Route
              exact
              path="/userCamera"
              render={(props) => <Usercamera auth={authProps} {...props} />}
            />
            <Route
              exact
              path="/gallery"
              render={(props) => <Gallery auth={authProps} {...props} />}
            />
            <Route
              exact
              path="/maps"
              render={(props) => <Dashboard auth={authProps} {...props} />}
            />
            <Route
              exact
              path="/profile"
              render={(props) => <Profile auth={authProps} {...props} />}
            />
            <Route
              exact
              path="/profile/genres"
              render={(props) => <Genres auth={authProps} {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  )
);
