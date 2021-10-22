import defaultAvatar from "../assets/default_avatar.png";
import star from "../assets/starred.svg";
import styled from "@emotion/styled";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: white;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;

const SmallText = styled.p`
  font-size: 12px;
  line-height: 15px;
`;

const FavoriteUserInfo = ({ name, login }) => (
  <InfoContainer>
    <p>{name}</p>
    <SmallText>{login}</SmallText>
  </InfoContainer>
);

export default function UserTag({ asFavorite, avatar, name, login }) {
  return (
    <MainContainer>
      <UserContainer>
        <Avatar src={avatar || defaultAvatar} alt="" />
        {asFavorite ? (
          <FavoriteUserInfo name={name} login={login} />
        ) : (
          <p>{login}</p>
        )}
      </UserContainer>
      {asFavorite && <img src={star} alt="" />}
    </MainContainer>
  );
}
