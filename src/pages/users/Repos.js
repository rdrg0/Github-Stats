import Title from "../../components/Title";

export default function Repos(props) {
  const { username } = props.match.params;

  return (
    <div>
      <Title>page users/{username}/Repos not found</Title>
    </div>
  );
}
