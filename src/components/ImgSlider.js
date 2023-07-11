/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <Myslider className="myslider">
      <Carousel {...settings}>
        <Slide>
          <a>
            <img src="/assets/images/slider-badag.jpg" />
          </a>
        </Slide>
        <Slide>
          <a>
            <img src="/assets/images/slider-badging.jpg" />
          </a>
        </Slide>
        <Slide>
          <a>
            <img src="/assets/images/slider-scale.jpg" />
          </a>
        </Slide>
        <Slide>
          <a>
            <img src="/assets/images/slider-scales.jpg" />
          </a>
        </Slide>
      </Carousel>
    </Myslider>
  );
};

export default ImgSlider;

const Myslider = styled.div`
  margin: 10px auto;
  @media (min-width: 560px) {
    width: 85%;
  }
`;
const Carousel = styled(Slider)`
  & > button {
    height: 100%;
    opacity: 0;
    width: 50px;
    z-index: 10;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
  }
  .slick-dots li button:before {
    font-size: 8px;
    color: #fff;
    transition: 0.3s;
    @media (min-width: 560px) {
      font-size: 10px;
    }
  }
  .slick-dots li.slick-active button:before {
    color: #fff;
  }
  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Slide = styled.div`
  margin: 0 auto;

  & > a {
    border: 3.5px solid #3e404c;
    transition: 0.3s;
    /* cursor: pointer; */
    box-shadow: 4px 4px 7px #000000ad;
    border-radius: 12px;
    overflow: hidden;
    @media (min-width: 560px) {
      width: calc(100% - 15px) !important;
    }
    /* &:hover {
      border-color: #ddd;
    } */
  }
  & > a,
  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
