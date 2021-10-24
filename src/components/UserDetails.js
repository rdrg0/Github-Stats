// Remember, props = avatar, name, starred, description, statFollowers, statFollowings, statRepos, statGist

import { CardStats } from "./CardStat";
import starredIcon from "../assets/starred.svg";
import notSarredIcon from "../assets/notStarred.svg"
import styled from "@emotion/styled";
import useStar from "../hooks/useStar";
import { Link } from "react-router-dom";

export default function UserDetails({ userData }) {

  const [favorite, handleStar] = useStar(userData)

  const {
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    public_gists,
    login
  } = userData;

  console.log(userData.login)


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
  const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  `
  const UserName = styled.div`
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    height: 25px;
    gap: 4px;
    text-align: center;
    color: #000000;
    display: flex;
    align-items: center;
    margin: 0px 4px;
  `
  const Clickable = styled.div`
    &:hover {
      cursor: pointer;
    }  
  `


  return (
    <ResultContainer>
      <ImgStyle src={avatar_url} alt="avatar" />
      <UserName>
        {name || login}
        <Clickable onClick={handleStar}>
          <img src={favorite ? starredIcon : notSarredIcon} alt="starred" />
        </Clickable>
      </UserName>
      <h3> {bio} </h3>
      <CardsContainer>
        <Link to={`/users/${login}/followers`}>
          <CardStats count={followers} description="followers" icon="followers" />
        </Link>
        <Link to={`/users/${login}/followings`}>
          <CardStats
          count={following}
          description="followings"
          icon="followings"
          />
        </Link>
        <Link to={`/users/${login}/repos`}>
          <CardStats
          count={public_repos}
          description="public repos"
          icon="repos"
          />
        </Link>
        <CardStats
        count={public_gists}
        description="public gists"
        icon="gits"
        />
      </CardsContainer>
    </ResultContainer>
  );
}
