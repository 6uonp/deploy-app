import styled from "styled-components";

const JumbotronWrapper = styled.div`
  width: 100%;
  height: 388px;
  display: flex;
  align-items: center;
  background: black;
  color: white;
  @media (min-width: 769px) {
    height: 400px;
  }
  @media (min-width: 1281px) {
    width: 860px;
    height: 600px;
  }
  @media (min-width: 1660px) {
    width: 1220px;
  }
`;

const JumbotronContent = styled.div`
  width: 327px;
  margin: auto;
  font-family: Helvetica;
  h2 {
    margin: 0;
    color: white;
  }
  hr {
    margin: 40px 0;
  }
  span {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    width: 600px;
  }
`;

const Jumbotron = (props) => {
  return (
    <JumbotronWrapper>
      <JumbotronContent>
        <h2>{props.title}</h2>
        <hr></hr>
        <h2>{props.header}</h2>
        <span>{props.content}</span>
        <button>LEARN MORE</button>
      </JumbotronContent>
    </JumbotronWrapper>
  );
};

export default Jumbotron;
