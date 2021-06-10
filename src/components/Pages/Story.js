import styled from "styled-components";
import Hero from "../Hero/Hero";
import Text from "../Articles/Text";

const StoryWrapper = styled.div``;

const Comments = [
  {
    name: "Jonathan Walker",
    comment:
      "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
  },
  {
    name: "Brenda Mercer",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae.",
  },
];

const Story = () => {
  return (
    <StoryWrapper>
      <Hero title={"AMAZING PLACES IN AMERICA TO VISIT"} />
      <Text
        title={"Quisque viverra interdum velit?"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus neque. Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet curae quis quisque, nunc duis ac at elementum dui integer viverra tempus. Lacinia bibendum diam senectus egestas nec molestie convallis aenean hac tempus, vivamus purus congue euismod fringilla cursus donec est eu blandit platea, feugiat vitae netus orci habitant accumsan placerat morbi nostra. Quam fringilla sociis suspendisse quis ultricies dis tellus cum, litora aliquet."
        }
        comments={Comments}
      />
    </StoryWrapper>
  );
};

export default Story;
