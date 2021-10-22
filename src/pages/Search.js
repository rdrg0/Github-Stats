import InputSearch from "../components/InputSearch";
import UserDetail from "../components/UserDetail";
import useSearch from "../hooks/useSearch";

export default function Search() {
  const [value, setValue, loading, setLoading] = useSearch();

  return (
    <div>
      <InputSearch
        value={value}
        setValue={setValue}
        loading={loading}
        setLoading={setLoading}
      />
      {!loading && value && <UserDetail />}
    </div>
  );
}
