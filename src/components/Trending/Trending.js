import styled from "styled-components";
import TredingArticle from "../Articles/TredingArtical";

const TrendingWrapper = styled.div`
  margin: 0 140px;
  font-family: Helvetica;
  margin-top: 40px;
  h2 {
    margin: 0;
  }
`;

const TredingBody = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Trending = () => {
  return (
    <TrendingWrapper>
      <h2>TREDING</h2>
      <TredingBody>
        <TredingArticle
          articleHeader={"Dolore magna aliqua"}
          articleContent={
            "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
          }
        />
        <TredingArticle
          articleHeader={"Morbi eleifend a libero"}
          articleContent={
            "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
          }
        />
        <TredingArticle
          articleHeader={"Morbi eleifend a libero"}
          articleContent={
            "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
          }
        />
      </TredingBody>
    </TrendingWrapper>
  );
};

export default Trending;
