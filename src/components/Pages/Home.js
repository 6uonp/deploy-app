import styled from "styled-components";
import TextCard from "../Articles/TextCard";
import Carousels from "../Carousel/Carousels";
import HappeningNow from "../HappeningNow/HappeningNow";
import Jumbotron from "../Jumbotron/Jumbotron";

const articles = [
  {
    title: "TITLE1",
    subtitle: "Subtitle",
    content:
      "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.",
  },
  {
    title: "TITLE2",
    subtitle: "Subtitle",
    content:
      "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.",
  },
];

const HomeWrapper = styled.div`
  background: #ebeded;
  padding-bottom: 80px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

const TrendingWrapper = styled.div`
  margin: auto;
  width: 327px;
  @media (min-width: 769px) {
    width: 608px;
  }
  @media (min-width: 1280px) {
    width: 1160px;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Wrapper>
        <Jumbotron
          title={"WORLD NEWS"}
          header={"Amazing places in America to visit."}
          content={
            "For some reason — this country, this city, this neighborhood, this particular street —  is the place you are living a majority of your life in."
          }
        />
        <TextCard articles={articles} />
      </Wrapper>
      <TrendingWrapper>
        <h2>TRENDING</h2>
        <Carousels />
      </TrendingWrapper>
      <HappeningNow />
    </HomeWrapper>
  );
};

export default Home;
