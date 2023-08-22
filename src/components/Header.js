import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import { auth, db, provider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignOutState, setUserLoginDetails } from "../rtk/slices/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const usersRef = collection(db, "users");
  let location = useLocation();
  let [navBg, setNavBg] = useState(false);
  useEffect(() => {
    if (location.pathname.slice(1, 8) === "details") {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  }, [location]);
  const handleAuth = async () => {
    const result = await signInWithPopup(auth, provider);
    // console.log(result.user);

    // for firebase
    onSignInUser(result.user);
    // for react redux
    setUser(result.user);
  };
  const onSignInUser = async (data) => {
    await addDoc(usersRef, {
      username: data?.displayName,
      email: data?.email,
      userId: data?.uid,
    });
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  const SignUserOut = async () => {
    await signOut(auth);
    dispatch(setSignOutState());
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        navigate("/home");
      } else {
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <Nav className={navBg ? "nav-transparent" : ""}>
      <Container className="">
        <Logo>
          <img src="/assets/images/logo.svg" alt="" />
        </Logo>
        {!user ? (
          <Signin onClick={handleAuth}>Sign In</Signin>
        ) : (
          <>
            <NavLinks />
            <Info>
              <Photo>
                <img src={user?.photoURL} alt={user?.displayName} />
              </Photo>
              <Signout onClick={SignUserOut}>Sign Out</Signout>
            </Info>
          </>
        )}
      </Container>
    </Nav>
  );
};

export default Header;
const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  height: 80px;
  z-index: 100;
  background-color: #040714f0;
  color: #fff;
  &.nav-transparent {
    background-color: transparent;
  }
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;
const Logo = styled.h1`
  margin-right: 20px;
  & img {
    width: 80px;
  }
`;
const Signin = styled.button`
  padding: 6px 12px;
  font-size: 15px;
  border-radius: 4px;
  color: #fff;
  background-color: #002049;
  border: 2px solid #fff;
  transition: 0.3s;
  letter-spacing: 1.3px;
  white-space: nowrap;
  &:hover {
    background-color: #00377f;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &:hover button {
    opacity: 1;
    visibility: visible;
  }
`;

const Photo = styled.div`
  width: 35px;
  height: 35px;
  z-index: 20;
  overflow: hidden;
  cursor: pointer;
  & img {
    position: relative;
    display: block;
    border-radius: 4px;
    z-index: 20;
  }
`;

const Signout = styled.button`
  position: absolute;
  top: 32px;
  right: 0;
  z-index: 30;
  padding: 6px 12px;
  font-size: 15px;
  border-radius: 4px;
  color: #fff;
  background-color: #002049;
  border: 2px solid #fff;
  transition: 0.3s;
  letter-spacing: 1.3px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  &:hover {
    background-color: #00377f;
  }
`;
