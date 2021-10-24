import styled from "@emotion/styled";
import colors from "../utils/languageColors.json";
import stargazerIcon from "../assets/stargazer.svg";
import forkIcon from "../assets/fork.svg";
import { Link } from "react-router-dom";

const MainContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 12px;
  background-color: white;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

const RepoFullName = styled.p`
  font-weight: bold;
  color: #2d9cdb;
`;

const SmallText = styled.p`
  font-size: 12px;
  line-height: 15px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
`;

export default function RepoTag(props) {
  return (
    <MainContainer to={{ pathname: props.html_url }} target="_blank">
      <RepoFullName>{props.full_name}</RepoFullName>
      <SmallText>{props.description}</SmallText>

      <FlexContainer gap="16px">
        <FlexContainer gap="4px">
          <svg width="12" height="13" viewBox="0 0 12 13">
            <circle
              cx="6"
              cy="6.5"
              r="6"
              fill={colors[props.language] || "#E0E0E0"}
            />
          </svg>
          <SmallText>{props.language || "none"}</SmallText>
        </FlexContainer>

        <FlexContainer gap="4px">
          <img src={stargazerIcon} alt="star" />
          <SmallText>{props.stargazers_count}</SmallText>
        </FlexContainer>

        <FlexContainer gap="4px">
          <img src={forkIcon} alt="fork" />
          <SmallText>{props.forks}</SmallText>
        </FlexContainer>
      </FlexContainer>
    </MainContainer>
  );
}
