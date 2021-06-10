import styled from "styled-components";

const BannerWrapper = styled.div`
  display: flex;
`;
const BannerLeft = styled.div`
  width: 840px;
  display: flex;
  align-items: center;
  height: 600px;
  background: black;
  color: white;
`;

const BannerLeftContent = styled.div`
  width: 560px;
  margin: auto;
  font-family: Helvetica;
  h2 {
    margin: 0;
  }
  hr {
    width: 560px;
    margin: 40px 0;
  }
  span {
    font-size: 16px;
  }
`;

const BannerRight = styled.div`
  background: white;
`;
const Banner = () => {
  return (
    <BannerWrapper>
      <BannerLeft>
        <BannerLeftContent>
          <h2>WORLD NEWS</h2>
          <hr></hr>
          <h2>Amazing places in America to visit.</h2>
          <span>
            For some reason — this country, this city, this neighborhood, this
            particular street —  is the place you are living a majority of your
            life in.
          </span>
          <button>LEARN MORE</button>
        </BannerLeftContent>
      </BannerLeft>
      <BannerRight></BannerRight>
    </BannerWrapper>
  );
};

export default Banner;
