import { useEffect, useState } from "react";
import { getUser } from "../services/gitHub_fetcher";
import { useHistory, useLocation } from "react-router";

export default function useSearch() {
  const [userData, setUserData] = useState(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { push } = useHistory();
  console.log(useHistory());
  useEffect(() => {
    setUserData(null);
    const searchUser = async () => {
      try {
        const user_data_api = await getUser(value);
        setUserData(user_data_api);
        setLoading(false);
        push(`search/users/${value}`);
      } catch (error) {
        setLoading(false);
        setUserData(null);
      }
    };
    const bounce_time = setTimeout(searchUser, 1000);
    return () => {
      clearTimeout(bounce_time);
    };
  }, [value]);

  return [value, setValue, loading, setLoading, userData];
}
