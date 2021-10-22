import styled from "@emotion/styled";
import Pagination from "../../components/Pagination";
import Feed from "../../components/Feed";
import RepoTag from "../../components/RepoTag";
import { TitleH2 } from "../../components/Title";
import { Redirect, useLocation } from "react-router";
import parseQuery from "../../utils/queryParser";
import { useEffect, useState } from "react";
import { getRepos } from "../../services/gitHub_fetcher";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 411px;
  padding: 16px 32px;
  background-color: #f2f2f2;
`;

export default function Repos() {
  const [repos, setRepos] = useState([]);
  const username = localStorage.getItem("currentUser");
  const count = localStorage.getItem("repoCount");
  const location = useLocation();
  const pathName = location.pathname;
  const query = location.search;
  const currentPage = parseQuery(query);
  const initial = ((currentPage || 1) - 1) * 5;

  useEffect(() => {
    getRepos(username).then(setRepos).catch(console.log);
  }, []);

  if (query && !currentPage) {
    alert("Invalid page query!");
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <TitleH2>Public Repos ({count})</TitleH2>
      <Pagination
        total={repos.length}
        limit={5}
        currentPage={currentPage || 1}
        pathName={pathName}
      />
      <Feed>
        {repos.slice(initial, initial + 5).map((repo) => (
          <li key={repo.id}>
            <RepoTag {...repo} />
          </li>
        ))}
      </Feed>
    </Container>
  );
}
