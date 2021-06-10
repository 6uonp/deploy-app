import styled from "styled-components";

const TextCartWrapper = styled.div`
  height: 100%;
  width: 327px;
  display: flex;
  flex-direction: column;

  margin: auto;
  @media (min-width: 769px) {
    width: 608px;
  }
  @media (min-width: 1281px) {
    width: 420px;
  }
`;

const TextCardContent = styled.div``;

const TextCard = (props) => {
  return (
    <TextCartWrapper>
      <h2>MORE NEWS</h2>
      <hr />
      {props.articles.map((element) => (
        <TextCardContent key={element.title}>
          <h4>{element.title}</h4>
          <h4>{element.subtitle}</h4>
          <span>{element.content}</span>
        </TextCardContent>
      ))}
    </TextCartWrapper>
  );
};

export default TextCard;
