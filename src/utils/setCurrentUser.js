export default function setCurrentUser(userData) {
  localStorage.setItem(
    "currentUser",
    JSON.stringify({
      username: userData.login,
      reposCount: userData.public_repos,
      followersCount: userData.followers,
      followingsCount: userData.following,
    })
  );
}
