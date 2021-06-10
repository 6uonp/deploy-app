import { useState, useEffect } from "react";
import styled from "styled-components";
import LargeArticle from "../Articles/LargeArticle";
import SmallArticle from "../Articles/SmallArticle";

const HappeningNowWrapper = styled.div`
  margin: auto;
  width: fit-content;
  @media (min-width: 1280px) {
    width: 1160px;
  }
`;

const HappeningNowContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1280px) {
    flex-direction: row;
    height: 900px;
    justify-content: space-between;
  }
`;

const HappeningNowLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HappeningNowRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 769px) {
    flex-direction: row;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
  }
`;

const HappeningNow = () => {
  const [widthCurrent, setWidthCurrent] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      // console.log("resized to: ", widthCurrent, window.innerWidth);
      setWidthCurrent(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);

    return (_) => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return (
    <HappeningNowWrapper>
      <h2>HAPPENING NOW</h2>
      <HappeningNowContent>
        <HappeningNowLeft>
          <LargeArticle
            title={"Large article title"}
            content={
              "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam."
            }
          />
          <LargeArticle
            title={"Large article title"}
            content={
              "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam."
            }
          />
        </HappeningNowLeft>

        <HappeningNowRight>
          <SmallArticle title={"Small title"} />
          <SmallArticle title={"Small title"} />
          {widthCurrent >= 1280 && <SmallArticle title={"Small title"} />}
        </HappeningNowRight>
      </HappeningNowContent>
    </HappeningNowWrapper>
  );
};

export default HappeningNow;
