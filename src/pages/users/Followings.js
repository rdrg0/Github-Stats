import Title from "../../components/Title";

export default function Followings(props) {
  const { username } = props.match.params;
  return (
    <div>
      <Title>page users/{username}/Followings not found</Title>
    </div>
  );
}
