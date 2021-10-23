import { useState } from "react";

export default function useStar(userData) {

  const [favorite, setFavorite] = useState(userData.starred)

  function handleStar() {

    const favorites = JSON.parse(localStorage.getItem("ghFavorites")) || {};

    if (favorite) {
      delete favorites[userData.login]
    } else {
      favorites[userData.login] = { ...userData, starred: true }
    }
    localStorage.setItem("ghFavorites", JSON.stringify(favorites))
    console.log(favorites)
    setFavorite(!favorite)
  }

  return [favorite, handleStar]
}