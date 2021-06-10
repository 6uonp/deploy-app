import styled from "styled-components";

const LargeArticleWrapper = styled.div`
  width: 327px;
  height: 305px;
  background: black;
  font-family: Helvetica;
  @media (min-width: 769px) {
    width: 608px;
    height: 430px;
  }
  @media (min-width: 1280px) {
    width: 770px;
  }
  @media (max-width: 1279px) {
    margin-bottom: 40px;
  }
`;

const LargeArticleContent = styled.div`
  color: white;
  margin: 113px 24px 0 24px;
  h2 {
    margin: 0;
    color: white;
  }
  span {
    font-size: 16px;
    margin-top: 10px;
  }
  @media (min-width: 769px) {
    margin: 288px 40px 0 40px;
  }
`;

const LargeArticle = (props) => {
  return (
    <LargeArticleWrapper>
      <LargeArticleContent>
        <h2>{props.title}</h2>
        <span>{props.content}</span>
      </LargeArticleContent>
    </LargeArticleWrapper>
  );
};

export default LargeArticle;
