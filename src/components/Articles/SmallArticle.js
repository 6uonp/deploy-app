import styled from "styled-components";

const SmallArticleWrapper = styled.div`
  font-family: Acumin Pro;
  h4 {
    margin: 0;
  }
`;

const SmallArticleImage = styled.div`
  background: black;
  margin-bottom: 20px;
  width: 327px;
  height: 210px;
  @media (min-width: 769px) {
    width: 284px;
  }
  @media (min-width: 1280px) {
    width: 360px;
  }
`;

const SmallArticle = (props) => {
  return (
    <SmallArticleWrapper>
      <SmallArticleImage></SmallArticleImage>
      <h4>{props.title}</h4>
    </SmallArticleWrapper>
  );
};

export default SmallArticle;
