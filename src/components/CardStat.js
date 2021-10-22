import styled from "@emotion/styled";
import followers from '../assets/followers.svg'
import followings from '../assets/followings.svg'
import gist from '../assets/gist.svg'
import repos from '../assets/repos.svg'

export const CardStats = ({ count, description, icon }) => {

  function findIcon() {
    switch (icon) {
      case "followers":
        return followers
      case "followings":
        return followings
      case "repos":
        return repos
      case "gits":
        return gist
      default:
        break;
    }
  }

  const Card = styled.div`
    background-color: aqua;
  `

  return (
    <Card>
      <img src={findIcon()} alt="icon"/> <br />
      <h2> {count} </h2>
      <h3> {description} </h3>
    </Card>
  );
}