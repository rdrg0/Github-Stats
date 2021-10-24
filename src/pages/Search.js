import InputSearch from "../components/InputSearch";
import UserDetails from "../components/UserDetails";
import useSearch from "../hooks/useSearch";
import styled from "@emotion/styled";
import { useParams } from "react-router";
import setCurrentUser from "../utils/setCurrentUser";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 25px 41px 26px;
`;

export default function Search() {
  const { username } = useParams();
  const [value, setValue, loading, userData] = useSearch(username);

  const ContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  `;
  const Searching = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    gap: 12px;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;

    color: #000000;
  `
  const handleFeedback = () => {
    if (userData !== null) {
      setCurrentUser(userData);
      return <UserDetails userData={userData} />;
    }
    return;
  };

  return (
    <MainContainer>
      <InputSearch value={value} setValue={setValue} />
      <ContainerStyle>
        {handleFeedback() || (
          <Searching>
            <img alt="logo-github" src="/git-logo.png" />
            {loading ? <h3>Retrieving user...</h3> : <h3>No users...</h3>}
          </Searching>
        )}
      </ContainerStyle>
    </MainContainer>
  );
}
