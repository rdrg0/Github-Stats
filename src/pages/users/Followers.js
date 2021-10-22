import React from "react";
import { TitleH2 } from "../../components/Title";

export default function Followers(props) {
  const { username } = props.match.params;
  return (
    <div>
      <TitleH2>page users/{username}/Followers not found</TitleH2>
    </div>
  );
}
