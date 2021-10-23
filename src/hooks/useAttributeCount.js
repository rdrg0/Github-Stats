import { useHistory } from "react-router";
import { getUser } from "../services/gitHub_fetcher";
import { groupByThreeDigits } from "../utils/formatNumber";
import setCurrentUser from "../utils/setCurrentUser";

export default function useAttributeCount(username, attribute) {
  const { replace } = useHistory();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let count;

  if (currentUser && currentUser.username === username) {
    console.log("ENTERED IF");
    count = groupByThreeDigits(currentUser[`${attribute}Count`]);
  } else {
    console.log("ENTERED else");
    getUser(username)
      .then(setCurrentUser)
      .catch((error) => {
        console.log(error);
        replace(`/search`);
      });
  }

  return count;
}
