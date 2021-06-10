import TextCard from "./components/Articles/TextCard";
import Carousels from "./components/Carousel/Carousels";
import Footer from "./components/Footer/Footer";
import HappeningNow from "./components/HappeningNow/HappeningNow";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Trending from "./components/Trending/Trending";
import Home from "./components/Pages/Home";
import { Fragment } from "react";
import Story from "./components/Pages/Story";

const App = () => {
  return (
    <Fragment>
      {/* <Home /> */}
      <Story />
    </Fragment>
  );
};

export default App;
