import React, { useEffect } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import { auth, db, provider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  // selectUserEmail,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../rtk/slices/userSlice";
import { store } from "../rtk/store";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const usersRef = collection(db, "users");

  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);

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
    console.log(store);
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
    <Nav>
      <Container className="">
        <Logo>
          {/* <Link to=""> */}
          <img src="/assets/images/logo.svg" alt="" />
          00
          {/* </Link> */}
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
    /* border-radius: 50%; */
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
