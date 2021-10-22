import React from "react";
import Title from "../../components/Title";

export default function Followers(props) {
  const { username } = props.match.params;
  return (
    <div>
      <Title>page users/{username}/Followers not found</Title>
    </div>
  );
}
