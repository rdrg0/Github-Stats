export default function InputSearch({ value, setValue, loading, setLoading }) {
  const handleInput = (e) => {
    setValue(e.target.value);
    setLoading(true);
  };
  console.log("render INPUT", !!value);
  return (
    <div>
      <input type="text" value={value} onChange={handleInput} />
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
    </div>
  );
}
