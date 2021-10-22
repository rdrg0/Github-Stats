import { Link } from "react-router-dom";
import styled from "@emotion/styled"
import Title from "../components/Title"
import homeImg from "../home_img.png"


const HomeImg = styled.img`
  height: 240px;
  width: 288.55px;
`

export default function Home() {

  return (

    <>
      <Title>
        Welcome to Github Users
      </Title>
      <HomeImg src={homeImg} alt="github_mascot" />
      <Link to="/search">
        <button>Search</button>
      </Link>
    </>



  )
}
