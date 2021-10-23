import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Error404 from "./pages/Error404";
import Followers from "./pages/users/Followers";
import Repos from "./pages/users/Repos";
import Home from "./pages/Home";
import Followings from "./pages/users/Followings";
import styled from "@emotion/styled";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import { ReactComponent as HomeIcon } from "./assets/VectorHomeIcon.svg";
import { ReactComponent as SearchIcon } from "./assets/VectorFavoriteIcon.svg";
import { ReactComponent as FavoriteIcon } from "./assets/VectorSearchIcon.svg";


const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 411px;
  background-color: #f2f2f2;
  margin: auto;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: absolute;
  bottom: 0px;
  width: 411px;
  height: 66px;

  background: #F2F2F2;
  box-shadow: 0px -2px 0px rgba(0, 0, 0, 0.25);
`
const changeColor = () => {
  const url = window.location.pathname
  const Home = document.querySelector(".HomeIcon").children[0]
  const Search = document.querySelector(".SearchIcon").children[0]
  const Favorite = document.querySelector(".FavoriteIcon").children[0]

  switch (url) {
    case "/":
      Home.attributes.fill.value="#828282"
      Search.attributes.fill.value="#BDBDBD"
      Favorite.attributes.fill.value="#BDBDBD"
      break;
    case "/search":
      Search.attributes.fill.value="#828282"
      Home.attributes.fill.value="#BDBDBD"
      Favorite.attributes.fill.value="#BDBDBD"
      break;
    case "/favorites":
      Favorite.attributes.fill.value="#828282"
      Search.attributes.fill.value="#BDBDBD"
      Home.attributes.fill.value="#BDBDBD"
      break;
    default:
      break;
  }
}

function App() {
  
  return (
    <Main>
      <Router>
        <Switch>
          <Route path="/users/:username/followers" component={Followers} />
          <Route path="/users/:username/followings" component={Followings} />
          <Route path="/users/:username/repos" component={Repos} />
          <Route path="/users/:username" component={Search} />
          <Route path="/search" component={Search} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/" component={Home} />
          <Route component={Error404} />
        </Switch>
        <Footer onClick={changeColor}>
        <Link to="/">
          <HomeIcon className="HomeIcon" />
        </Link>
        <Link to="/search">
          <SearchIcon className="SearchIcon"/>
        </Link>
        <Link to="/favorites">
          <FavoriteIcon className="FavoriteIcon"/>
        </Link>
        </Footer>
      </Router>
    </Main>
  );
}

export default App;
