import { TitleH1 } from "../../components/Title";

export default function Repos(props) {
  const { username } = props.match.params;

  return (
    <div>
      <TitleH1>page users/{username}/Repos not found</TitleH1>
    </div>
  );
}
