import InputSearch from "../components/InputSearch";
import UserDetails from "../components/UserDetails";
import useSearch from "../hooks/useSearch";
import styled from "@emotion/styled";

export default function Search(props) {
  const [value, setValue, loading, setLoading, userData] = useSearch();

  const ContainerStyle = styled.div`
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  `;
  const handleFeedback = () => {
    if (userData !== null) {
      return <UserDetails userData={userData} />;
    }
    return;
  };

  return (
    <>
      <InputSearch value={value} setValue={setValue} setLoading={setLoading} />
      <ContainerStyle>
        {handleFeedback() || (
          <div>
            <img alt="logo-github" src="/git-logo.png" />
            {loading ? <h3>Retrieving user...</h3> : <h3>No users...</h3>}
          </div>
        )}
      </ContainerStyle>
    </>
  );
}
