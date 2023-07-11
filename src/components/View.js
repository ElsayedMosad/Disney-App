import React from "react";
import styled from "styled-components";
const View = () => {
  return (
    <Collections className="collections">
      <Box className="box">
        <img src="/assets/images/viewers-disney.png" alt="" />
        <video autoPlay loop playsInline muted>
          <source src="/assets/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box className="box">
        <img src="/assets/images/viewers-marvel.png" alt="" />
        <video autoPlay loop playsInline muted>
          <source src="/assets/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box className="box">
        <img src="/assets/images/viewers-national.png" alt="" />
        <video autoPlay loop playsInline muted>
          <source
            src="/assets/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
      <Box className="box">
        <img src="/assets/images/viewers-pixar.png" alt="" />
        <video autoPlay loop playsInline muted>
          <source src="/assets/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box className="box">
        <img src="/assets/images/viewers-starwars.png" alt="" />
        <video autoPlay loop playsInline muted>
          <source
            src="/assets/videos/1608229455-star-wars.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
    </Collections>
  );
};

export default View;

const Collections = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 25px;
  padding: 0 40px;
  margin: 70px auto 50px;
  @media (min-width: 567px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    width: 85%;
    padding: 0;
  }
`;
const Box = styled.div`
  overflow: hidden;
  border: 3.5px solid #3e404c;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;

  &:hover {
    border-color: #ddd;
    transform: scale(1.08);
  }
  & > img {
    display: block;
    max-width: 100%;
    width: 100%;
    position: relative;
    z-index: 1;
    object-fit: cover;
    pointer-events: none;
  }
  & > video {
    display: block;
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    border-radius: 4px;
    transition: opacity 0.15s ease-in-out 0s;
    opacity: 0;
  }
  :hover video {
    opacity: 1;
  }
`;
