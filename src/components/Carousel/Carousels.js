import { Carousel } from "antd";
import styled from "styled-components";
import TredingArticle from "../Articles/TredingArtical";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";

const CarouselContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;
const Carousels = () => {
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
    <Carousel autoplay={true}>
      <div>
        <CarouselContentWrapper>
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
          {widthCurrent >= 1280 && (
            <TredingArticle
              articleHeader={"Morbi eleifend a libero"}
              articleContent={
                "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
              }
            />
          )}
        </CarouselContentWrapper>{" "}
      </div>
      <div>
        <CarouselContentWrapper>
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
          {widthCurrent >= 1280 && (
            <TredingArticle
              articleHeader={"Morbi eleifend a libero"}
              articleContent={
                "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
              }
            />
          )}
        </CarouselContentWrapper>{" "}
      </div>
      <div>
        <CarouselContentWrapper>
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
          {widthCurrent >= 1280 && (
            <TredingArticle
              articleHeader={"Morbi eleifend a libero"}
              articleContent={
                "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
              }
            />
          )}
        </CarouselContentWrapper>{" "}
      </div>
    </Carousel>
  );
};

export default Carousels;
