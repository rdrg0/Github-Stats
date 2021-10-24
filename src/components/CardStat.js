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
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    justify-content: space-evenly;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    width: 140px;
    height: 140px;
  `

  return (
    <Card>
      <img src={findIcon()} alt="icon"/> <br />
      <h2> {count} </h2>
      <h3> {description} </h3>
    </Card>
  );
}