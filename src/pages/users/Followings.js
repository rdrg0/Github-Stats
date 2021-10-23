import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Feed from "../../components/Feed";
import Pagination from "../../components/Pagination";
import { TitleH2 } from "../../components/Title";
import { TagsContainer } from "../../components/UI/TagsContainer";
import UserTag from "../../components/UserTag";
import useAttributeCount from "../../hooks/useAttributeCount";
import usePagination from "../../hooks/usePagination";
import { getFollowings } from "../../services/gitHub_fetcher";

export default function Followings(props) {
  const [followings, setFollowings] = useState([]);
  const [pathName, currentPage] = usePagination();
  const { username } = useParams();
  const count = useAttributeCount(username, "followings");
  const limit = 7;
  const start = (currentPage - 1) * limit;

  useEffect(() => {
    getFollowings(username).then(setFollowings).catch(console.log);
  }, []);

  return (
    <TagsContainer>
      <TitleH2>Followings ({count})</TitleH2>
      <Pagination
        total={followings.length}
        limit={limit}
        currentPage={currentPage}
        pathName={pathName}
      />
      <Feed>
        {followings.slice(start, start + limit).map((follower) => (
          <li key={follower.id}>
            <UserTag login={follower.login} />
          </li>
        ))}
      </Feed>
    </TagsContainer>
  );
}
