import styled from "styled-components";

export const TredingArticleWrapper = styled.div`
  width: 327px;
  height: 350px;
  background: white;
  @media (min-width: 769px) {
    width: 284px;
  }
  @media (min-width: 1280px) {
    width: 360px;
  }
`;

const TredingArticleImage = styled.div`
  height: 50%;
  background: black;
`;

const TrendingArticleContent = styled.div`
  height: 50%;
  padding: 40px;
  span {
    font-family: Acumin Pro;
    font-size: 13px;
  }
`;

const TredingArticle = (props) => {
  return (
    <TredingArticleWrapper>
      <TredingArticleImage></TredingArticleImage>
      <TrendingArticleContent>
        <h4>{props.articleHeader}</h4>
        <span>{props.articleContent}</span>
      </TrendingArticleContent>
    </TredingArticleWrapper>
  );
};

export default TredingArticle;
