import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
  const params = useParams();

  const movies = useSelector((state) => state.movies);
  let movie = movies[params.movieId - 1];

  return (
    <Main>
      <BgImg>
        <img src={movie.backgroundImg} alt="" />
      </BgImg>
      <Content>
        <h2>{movie.title}</h2>
        <div className="controls">
          <div className="buts">
            <button className="watch-now">
              <img src="/assets/images/play-icon-black.png" alt="not" />
              <span>watch now</span>
            </button>
            <button className="trailer">
              <img src="/assets/images/play-icon-white.png" alt="not" />
              <span>Trailer</span>
            </button>
          </div>
          <div className="icons">
            <button className="a">+</button>
            <button>
              <img src="/assets/images/group-icon.png" alt="group" />
            </button>
          </div>
        </div>
        <div className="sub">{movie.subTitle}</div>
        <p className="par">{movie.description}</p>
      </Content>
    </Main>
  );
};

export default Details;
const Main = styled.main`
  min-height: 100vh;
  padding-top: 40vh;
  position: relative;
  background-color: #09051e9c;
  @media (min-width: 768px) {
    padding-left: 50px;
  }
`;
const BgImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #09051ea1;
    background-color: #07061ad1;
    box-shadow: inset #09051e 9px -8px 18px 2px, inset #09051e -7px 9px 20px 6px;
  }
  & img {
    width: 100%;
    display: block;
  }
`;
const Content = styled.div`
  position: relative;
  max-width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  color: #fff;
  @media (min-width: 768px) {
    width: 600px;
  }
  h2 {
    font-size: 40px;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    @media (min-width: 768px) {
      font-size: 60px;
    }
  }
  .controls {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
    }
  }
  .buts {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .buts button {
    padding: 13px 20px;
    width: auto;
    background: #fff;
    font-weight: 500;
    border-radius: 2px;
    margin-right: 15px;
    font-size: 14px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 15px;
    }
    img {
      width: 20px;
    }
    &.watch-now {
    }
    &:hover {
      opacity: 0.7;
    }
  }
  .buts button.trailer {
    background-color: #000;
    color: #fff;
    border: 2px solid #fff;
  }
  .sub {
    font-size: 14px;
    line-height: 1.9;
  }
  .par {
    line-height: 1.9;
    font-size: 21px;
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 15px;
  }
  .icons button {
    width: 45px;
    height: 45px;
    border: 2px solid #f9f9f9;
    background: #000;
    color: #fff;
    border-radius: 50%;
    padding: 5px;
    transition: 0.2s;
    font-size: 25px;
    margin-right: 10px;

    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
