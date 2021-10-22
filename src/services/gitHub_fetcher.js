const apiFetch = async (endpoint) => {
  const response = await fetch(`https://api.github.com/users/${endpoint}`);
  const parsedResponse = await response.json();

  if (!response.ok) {
    throw new Error(parsedResponse.message);
  }

  return parsedResponse;
};

export const getUser = async (username) => {
  const data = await apiFetch(username);
  return data;
};

export const getFollowers = async (username) => {
  const data = await apiFetch(`${username}/followers`);
  return data;
};

export const getFollowings = async (username) => {
  const data = await apiFetch(`${username}/following`);
  return data;
};

export const getRepos = async (username) => {
  const data = await apiFetch(`${username}/repos`);
  return data;
};
