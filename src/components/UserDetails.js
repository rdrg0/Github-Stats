// Remember, props = avatar, name, starred, description, statFollowers, statFollowings, statRepos, statGist

import { CardStats } from "./CardStat";
import avatar from "../assets/default_avatar.png"
import starred from "../assets/starred.svg"
import styled from "@emotion/styled";

export default function UserDetails({ ...props }) {

  const CardsContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  `

  return (
    <div>
      <img src={avatar} alt="avatar" /> <br />
      <h2> {props.name} </h2>
      <img src={starred} alt="starred"/>
      <h3> {props.description} </h3>
      <CardsContainer>
        <CardStats count={props.statFollowers} description="followers" icon="followers" />
        <CardStats count={props.statFollowings} description="followings" icon="followings" />
        <CardStats count={props.statRepos} description="public repos" icon="repos" />
        <CardStats count={props.statGist} description="public gists" icon="gits" />
      </CardsContainer>
    </div>
  );
}