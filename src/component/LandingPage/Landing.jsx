import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import Collection from "./Collection";
import Advanture from './Advanture';

const Landing = () => {
  return (
    <>
      <div className="landing">
      <Banner />
      <HomeCategory />
      <Collection />
      <Advanture />
      </div>
    </>
  );
};

export default Landing;
