import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { TitleH1 } from "./components/Title";
import Error404 from "./pages/Error404";
import Followers from "./pages/users/Followers";
import Repos from "./pages/users/Repos";
import Home from "./pages/Home";
import Followings from "./pages/users/Followings";
import styled from "@emotion/styled";
import UserDetails from "./components/UserDetails";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const userData = {
    //avatar="",
    name: "Dan Abramov",
    //starred: false,
    description:
      "Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
    statFollowers: "64K",
    statFollowings: "171",
    statRepos: "249",
    statGist: "72",
  };

  localStorage.setItem(
    "currentUser",
    JSON.stringify({
      username: "gaearon",
      reposCount: 249,
      followersCount: 64254,
      followingsCount: 171,
    })
  );

  return (
    <Main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search">
            <UserDetails {...userData} />
          </Route>
          <Route path="/favorite">
            <TitleH1> page Favorites not found</TitleH1>
          </Route>
          <Route path="/users/:username/followers" component={Followers} />
          <Route path="/users/:username/followings" component={Followings} />
          <Route path="/users/:username/repos" component={Repos} />
          <Route path="*" component={Error404} />
        </Switch>
        <div className="footer">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/favorite">Favorite</Link>
        </div>
      </Router>
    </Main>
  );
}

export default App;
