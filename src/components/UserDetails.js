// Remember, props = avatar, name, starred, description, statFollowers, statFollowings, statRepos, statGist

import { CardStats } from "./CardStat";
import starred from "../assets/starred.svg";
import styled from "@emotion/styled";

export default function UserDetails({ userData }) {
  console.log("USER DETAILS");
  const {
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    public_gists,
  } = userData;
  const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  `;
  const ImgStyle = styled.img`
    border-radius: 50%;
    width: 120px;
  `;

  return (
    <div>
      <ImgStyle src={avatar_url} alt="avatar" /> <br />
      <h2> {name} </h2>
      <img src={starred} alt="starred" />
      <h3> {bio} </h3>
      <CardsContainer>
        <CardStats count={followers} description="followers" icon="followers" />
        <CardStats
          count={following}
          description="followings"
          icon="followings"
        />
        <CardStats
          count={public_repos}
          description="public repos"
          icon="repos"
        />
        <CardStats
          count={public_gists}
          description="public gists"
          icon="gits"
        />
      </CardsContainer>
    </div>
  );
}
