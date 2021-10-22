import { TitleH2 } from "../../components/Title";

export default function Followings(props) {
  const { username } = props.match.params;
  return (
    <div>
      <TitleH2>page users/{username}/Followings not found</TitleH2>
    </div>
  );
}
