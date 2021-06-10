import styled from "styled-components";

const TextWrapper = styled.div`
  font-family: Helvetica;
  width: 327px;
  margin: auto;
  @media (min-width: 769px) {
    width: 608px;
  }
  @media (min-width: 1280px) {
    width: 1160px;
    display: flex;
    flex-direction: row;
  }
`;

const TextContent = styled.div`
  h1 {
    font-family: Acumin Pro;
    font-weight: bold;
    margin: 0;
    margin-bottom: 24px;
  }
  div {
    font-size: 14px;
    text-align: justify;
    @media (min-width: 769px) {
      text-align: -webkit-auto;
    }
  }
  margin-bottom: 40px;
  @media (min-width: 769px) {
    column-count: 2;
    column-gap: 40px;
    margin-bottom: 80px;
  }
  @media (min-width: 1280px) {
    column-count: 1;
    margin: 0;
    width: 330px;
  }
`;

const Comment = styled.div`
  h2 {
    font-weight: bold;
    margin: 0;
    margin-bottom: 26px;
  }
  div {
    font-size: 16px;
    text-align: justify;
    margin-bottom: 24px;
    @media (min-width: 769px) {
      text-align: -webkit-auto;
      margin-bottom: 40px;
    }
  }
`;

const CommentWrapper = styled.div`
  max-width: 730px;
  @media (min-width: 769px) {
    margin-top: 80px;
  }
  @media (min-width: 1280px) {
    margin: 0;
  }
`;

const Text = (props) => {
  return (
    <TextWrapper>
      <TextContent>
        <h1>{props.title}</h1>
        <div>{props.content}</div>
      </TextContent>
      <hr />
      <CommentWrapper>
        {props.comments.map((element) => (
          <Comment key={element.name}>
            <h2>{element.name}</h2>
            <div>{element.comment}</div>
          </Comment>
        ))}
      </CommentWrapper>
    </TextWrapper>
  );
};

export default Text;
