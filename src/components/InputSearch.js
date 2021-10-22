import styled from "@emotion/styled";

const ContainerStyle = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const InputStyle = styled.input`
  border: none;
  outline: none;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-family: Source Code Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  padding: 4px 8px;
`;

export default function InputSearch({ value, setValue, loading, setLoading }) {
  const handleInput = (e) => {
    setValue(e.target.value);
    setLoading(true);
  };
  console.log("render INPUT", !!value);
  return (
    <ContainerStyle>
      <InputStyle
        placeholder="username"
        type="text"
        value={value}
        onChange={handleInput}
      />
      <div>
        <img alt="logo-github" src="/git-logo.png" />
      </div>
      {!value ? (
        ""
      ) : loading ? (
        <h3>Retrieving user...</h3>
      ) : (
        <h3>No users...</h3>
      )}
    </ContainerStyle>
  );
}
