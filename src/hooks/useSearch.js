import { useEffect, useState } from "react";
import { getUser } from "../services/gitHub_fetcher";
import { useHistory } from "react-router";

export default function useSearch() {
  const [userData, setUserData] = useState(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { push } = useHistory();

  useEffect(() => {
    setUserData(null);
    push(`/search`);
    if (value.length < 3) return;

    const searchUser = async () => {
      try {
        setLoading(true);
        const user_data_api = await getUser(value);
        setUserData(user_data_api);
        setLoading(false);
        push(`/users/${value}`);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setUserData(null);
      }
    };
    const bounce_time = setTimeout(searchUser, 1000);
    return () => {
      clearTimeout(bounce_time);
    };
  }, [value]);

  return [value, setValue, loading, userData];
}
