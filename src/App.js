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
import { ReactComponent as FavoriteIcon } from "./assets/VectorFavoriteIcon.svg";
import { ReactComponent as SearchIcon } from "./assets/VectorSearchIcon.svg";
import { useEffect, useReducer, useState } from "react";


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
const changeColor = (e) => {
  const target = e.target
  const classValue = target.attributes.class.value
  const parentTarget = target.parentElement.parentElement.parentElement
  switch (classValue) {
    case "HomeIcon":
      target.style.fill="#828282"
      parentTarget.children[1].children[0].children[0].style.fill="#BDBDBD"
      parentTarget.children[2].children[0].children[0].style.fill="#BDBDBD"
      break;
    case "SearchIcon":
      target.style.fill="#828282"
      parentTarget.children[0].children[0].children[0].style.fill="#BDBDBD"
      parentTarget.children[2].children[0].children[0].style.fill="#BDBDBD"
      break;
    case "FavoriteIcon":
      target.style.fill="#828282"
      parentTarget.children[0].children[0].children[0].style.fill="#BDBDBD"
      parentTarget.children[1].children[0].children[0].style.fill="#BDBDBD"
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
        <Footer>
          <Link to="/">
            <HomeIcon fill="#BDBDBD" onClick={changeColor} />
          </Link>
          <Link to="/search">
            <SearchIcon fill="#BDBDBD" onClick={changeColor}/>
          </Link>
          <Link to="/favorites">
            <FavoriteIcon fill="#BDBDBD" onClick={changeColor} />
          </Link>
        </Footer>
      </Router>
    </Main>
  );
}

export default App;
