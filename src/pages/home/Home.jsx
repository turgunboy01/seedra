import React from "react";
import HomeSlider from "../../components/home/HomeSlider";
import Advertise from "../../components/home/Advertise";
import HomeBlog from "../../components/home/HomeBlog";
import HomeComments from "../../components/home/HomeComments";
import CenterMode from "../../components/home/ReactSlick";
import HomeInfo from "../../components/home/HomeInfo";
import HomeProducts from "../../components/home/HomeProducts";


const Home = () => {
  return (
    <>
      <HomeSlider />
      <Advertise />
      <HomeProducts />
      <HomeBlog />
      <HomeComments />
      <CenterMode />
      <HomeInfo />
    </>
  );
};

export default Home;
