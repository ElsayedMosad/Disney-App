import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import { Recomments } from "./GroupRecomments/Recomments";
import View from "./View";
import { NewToDisney } from "./GroupRecomments/NewToDisney";
import { Originals } from "./GroupRecomments/Originals";
import { Trending } from "./GroupRecomments/Trending";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../rtk/slices/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <Content>
      <ImgSlider />
      <View />
      <Grouprecomments>
        <Recomments groupname="Recomments" />
        <NewToDisney groupname="New to Disney+" />
        <Originals groupname="Originals" />
        <Trending groupname="Trending" />
      </Grouprecomments>
    </Content>
  );
};

export default Home;

const Content = styled.main`
  position: relative;
  overflow: hidden;
  top: 0;
  min-height: calc(100vh - 80px);
  min-height: calc(100vh);
  padding-top: 80px;
  background-image: url("assets/images/home-background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  background-color: #040714;
`;
const Grouprecomments = styled.div`
  padding: 20px 0 100px;
`;
