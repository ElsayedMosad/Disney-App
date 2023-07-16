import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavLinks = () => {
  return (
    <Menu>
      <li>
        <Link to="/home">
          <img src="/assets/images/home-icon.svg" alt="HOME" />
          <span>home</span>
        </Link>
      </li>
      <li>
        <Link to="/search">
          <img src="/assets/images/search-icon.svg" alt="SEARCH" />
          <span>search</span>
        </Link>
      </li>
      <li>
        <Link to="/watch">
          <img src="/assets/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>watchlist</span>
        </Link>
      </li>
      <li>
        <Link to="/originals">
          <img src="/assets/images/original-icon.svg" alt="ORIGINALS" />
          <span>originals</span>
        </Link>
      </li>
      <li>
        <Link to="/movies">
          <img src="/assets/images/movie-icon.svg" alt="MOVIES" />
          <span>movies</span>
        </Link>
      </li>
      <li>
        <Link to="/series">
          <img src="/assets/images/series-icon.svg" alt="SERIES" />
          <span>series</span>
        </Link>
      </li>
    </Menu>
  );
};

export default NavLinks;
const Menu = styled.ul`
  color: #ddd;
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 15px;
  li {
    cursor: pointer;
    & a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & img {
      width: 19px;
    }
    & span {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1.5px;
      display: inline-block;
      padding: 2px 0 1px 3px;
      text-transform: capitalize;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 4px;
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: 0.4s;
      }
    }
    &:hover span::after {
      width: calc(100% - 5px);
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
