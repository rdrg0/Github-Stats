import { useEffect, useState } from "react";
import { getUser } from "../services/gitHub_fetcher";
import { useHistory } from "react-router";

export default function useSearch(username = "") {
  const [userData, setUserData] = useState(null);
  const [value, setValue] = useState(username);
  const [loading, setLoading] = useState(false);

  const { push } = useHistory();

  useEffect(() => {
    setUserData(null);
    push(`/search`);
    if (value.length < 3) return;

    const searchUser = async () => {
      try {
        setLoading(true);
        const savedFavorites = JSON.parse(localStorage.getItem("ghFavorites"));
        if (savedFavorites && savedFavorites[value]) {
          setUserData(savedFavorites[value]);
          return;
        }
        const user_data_api = await getUser(value);
        const userLocalData = {
          avatar_url: user_data_api.avatar_url,
          name: user_data_api.name,
          bio: user_data_api.bio,
          followers: user_data_api.followers,
          following: user_data_api.following,
          public_repos: user_data_api.public_repos,
          public_gists: user_data_api.public_gists,
          starred: false
        }
        setUserData(userLocalData);
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
