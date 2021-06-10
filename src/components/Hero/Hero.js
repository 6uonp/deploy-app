import styled from "styled-components";

const HeroWrapper = styled.div`
  color: white;
  display: flex;
  background: black;
  align-items: center;
  height: 388px;
  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 1280px) {
    height: 600px;
  }
`;

const HeroContent = styled.div`
  font-family: Helvetica;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  p {
    text-align: center;
    font-size: 30px;
    @media (min-width: 1280px) {
      font-size: 50px;
    }
  }
  div {
    margin: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      font-size: 16px;
    }
  }
`;

const HeroCatergory = styled.div`
  width: 318px;
  @media (min-width: 1280px) {
    width: 337px;
  }
`;

const Hero = (props) => {
  return (
    <HeroWrapper>
      <HeroContent>
        <p>{props.title}</p>
        <HeroCatergory>
          <div>
            <p>TRAVELGUIDE</p>
          </div>
          <div>
            <p>BEST PLACES</p>
          </div>
        </HeroCatergory>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
