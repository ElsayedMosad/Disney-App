import React from "react";
import styled from "styled-components";
export const NewToDisney = (props) => {
  return (
    <Container>
      <h3>NewToDisney</h3>
      <Content>
        <Warp>
          <img
            src="/assets/images/Carton/wallpaperflare.com_wallpaper (6).jpg"
            alt=""
          />
        </Warp>
        <Warp>
          <img
            src="/assets/images/Carton/wallpaperflare.com_wallpaper (7).jpg"
            alt=""
          />
        </Warp>
        <Warp>
          <img
            src="/assets/images/Carton/wallpaperflare.com_wallpaper (9).jpg"
            alt=""
          />
        </Warp>
        <Warp>
          <img
            src="/assets/images/Carton/wallpaperflare.com_wallpaper (8).jpg"
            alt=""
          />
        </Warp>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 90%;
  margin: 40px auto 0;
  h3 {
    padding: 10px;
  }
`;
const Content = styled.div`
  padding: 10px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  @media (min-width: 567px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  gap: 30px;
`;
const Warp = styled.div`
  position: relative;
  transition: 0.3s;
  border: 4px solid rgb(249, 249, 249, 0.1);
  height: fit-content;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  /* min-height: 170px; */
  img {
    inset: 0px;
    display: block;
    /* position: absolute; */
    object-fit: cover;
    /* height: 100%; */
    width: 100%;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.8);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
      rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  }
`;
