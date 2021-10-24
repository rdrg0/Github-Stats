import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Feed from "../../components/Feed";
import Pagination from "../../components/Pagination";
import { TitleH2 } from "../../components/Title";
import { TagsContainer } from "../../components/UI/TagsContainer";
import UserTag from "../../components/UserTag";
import useAttributeCount from "../../hooks/useAttributeCount";
import usePagination from "../../hooks/usePagination";
import { getFollowers } from "../../services/gitHub_fetcher";

export default function Followers() {
  const [followers, setFollowers] = useState([]);
  const [pathName, currentPage] = usePagination();
  const { username } = useParams();
  const count = useAttributeCount(username, "followers");
  const limit = 7;
  const start = (currentPage - 1) * limit;

  useEffect(() => {
    getFollowers(username).then(setFollowers).catch(console.log);
  }, []);

  return (
    <TagsContainer>
      <TitleH2>Followers ({count})</TitleH2>
      <Pagination
        total={followers.length}
        limit={limit}
        currentPage={currentPage}
        pathName={pathName}
      />
      <Feed>
        {followers.slice(start, start + limit).map((follower) => (
          <li key={follower.id}>
            <UserTag login={follower.login} />
          </li>
        ))}
      </Feed>
    </TagsContainer>
  );
}
