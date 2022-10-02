import { React, useEffect, useRef, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Header from "../Components/Layout/Header/Header";
import ProjectsList from "../Components/ProjectsList/ProjectsList";
import SocialWidget from "../Components/SoicalWidget/SocialWidget";

const Home = () => {
  const [headerHeight, setHeaderHeight] = useState(90);

  const myRef = useRef(90);

  const updateHeightState = () => {
    setHeaderHeight(myRef.current.offsetHeight);
  };

  useEffect(() => {
    updateHeightState();
  }, []);

  return (
    <div className="site__wrapper">
      <Header myRef={myRef}></Header>
      <SocialWidget></SocialWidget>
      <Hero headerHeight={headerHeight}></Hero>
      <ProjectsList></ProjectsList>
    </div>
  );
};

export default Home;
