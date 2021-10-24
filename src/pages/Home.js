import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { TitleH1 } from "../components/Title";
import homeImg from "../home_img.png";

const HomeImg = styled.img`
  height: 240px;
  width: 288.55px;
`;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  height: 80vh;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 16px;

  width: 109px;
  height: 36px;

  background: #2D9CDB;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  color: #FFFFFF;
`
export default function Home() {
  return (
    <HomeContainer>
      <TitleH1>Welcome to Github Users</TitleH1>
      <HomeImg src={homeImg} alt="github_mascot" />
      <Link to="/search">
        <Button>Continue</Button>
      </Link>
    </HomeContainer>
  );
}
