import { TitleH1 } from "../components/Title";
import Feed from "../components/Feed";
import UserTag from "../components/UserTag";
import { TagsContainer } from "../components/UI/TagsContainer";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";



export default function Favorites() {
  const [pathName, currentPage] = usePagination();
  const limit = 7;
  const start = (currentPage - 1) * limit;
  const favorites = JSON.parse(localStorage.getItem("ghFavorites"))

  return (

    <TagsContainer>
      <TitleH1> Favorites</TitleH1>
      <Pagination
        total={Object.keys(favorites).length}
        limit={limit}
        currentPage={currentPage}
        pathName={pathName}
      />
      <Feed>
        {Object.keys(favorites).slice(start, start + limit).map((key) => {
          return (
            <li key={key}>
              <UserTag
                asFavorite={true}
                name={favorites[key].name || favorites[key].login}
                avatar={favorites[key].avatar_url}
                login={favorites[key].login}
              />
            </li>)
        })}
      </Feed>

    </TagsContainer >
  );
}
