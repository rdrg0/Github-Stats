import Pagination from "../../components/Pagination";
import Feed from "../../components/Feed";
import RepoTag from "../../components/RepoTag";
import { TitleH2 } from "../../components/Title";
import { useEffect, useState } from "react";
import { getRepos } from "../../services/gitHub_fetcher";
import { TagsContainer } from "../../components/UI/TagsContainer";
import usePagination from "../../hooks/usePagination";
import { groupByThreeDigits } from "../../utils/formatNumber";

export default function Repos() {
  const [repos, setRepos] = useState([]);
  const [pathName, currentPage] = usePagination();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const username = currentUser.username;
  const count = groupByThreeDigits(currentUser.reposCount);
  const limit = 5;
  const start = (currentPage - 1) * limit;

  useEffect(() => {
    getRepos(username).then(setRepos).catch(console.log);
  }, []);

  return (
    <TagsContainer>
      <TitleH2>Public Repos ({count})</TitleH2>
      <Pagination
        total={repos.length}
        limit={limit}
        currentPage={currentPage}
        pathName={pathName}
      />
      <Feed>
        {repos.slice(start, start + limit).map((repo) => (
          <li key={repo.id}>
            <RepoTag {...repo} />
          </li>
        ))}
      </Feed>
    </TagsContainer>
  );
}
