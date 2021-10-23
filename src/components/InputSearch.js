import styled from "@emotion/styled";

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

export default function InputSearch({ value, setValue, setLoading }) {
  const handleInput = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <InputStyle
      placeholder="username"
      type="text"
      value={value}
      onChange={handleInput}
    />
  );
}
