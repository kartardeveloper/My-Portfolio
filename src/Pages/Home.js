import { React, useEffect, useRef, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Header from "../Components/Layout/Header/Header";
import SocialWidget from "../Components/SoicalWidget/SocialWidget";

const Home = () => {
  const [headerHeight, setHeaderHeight] = useState(100);

  const myRef = useRef(100);

  const updateHeightState = () => {
    window.addEventListener("resize", () => {
      setHeaderHeight(myRef.current.offsetHeight);
    });
  };

  useEffect(() => {
    updateHeightState();
  }, []);

  return (
    <div className="site__wrapper">
      <Header myRef={myRef}></Header>
      <SocialWidget></SocialWidget>
      <Hero headerHeight={headerHeight}></Hero>
    </div>
  );
};

export default Home;
