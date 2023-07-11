import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Main>
      <BgImg />
      <Content>
        <CtaImgOne src="/assets/images/cta-logo-one.png" alt="CtaImgOne" />
        <GetAll href="#">GET ALL THERE</GetAll>
        <ParMain>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </ParMain>
        <CtaImgTwo src="/assets/images/cta-logo-two.png" alt="CtaImgTwo" />
      </Content>
    </Main>
  );
};

export default Login;
const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
  position: relative;
`;
const BgImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("assets/images/login-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
const Content = styled.div`
  position: relative;
  z-index: 20;
  text-align: center;
  width: 600px;
  max-width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  color: #fff;
`;
const CtaImgOne = styled.img`
  margin: 0px auto;
  display: block;
`;
const GetAll = styled.a`
  background-color: #0063e5;
  padding: 12px;
  text-align: center;
  width: 100%;
  font-size: 17px;
  border-radius: 4px;
  transition: 0.3s;
  letter-spacing: 2px;
  font-weight: 500;
  &:hover {
    background-color: #0483ee;
  }
`;
const ParMain = styled.p`
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: 1.5px;
  color: #fff;
`;
const CtaImgTwo = styled.img`
  display: block;
  margin: 0 auto;
  object-fit: cover;
`;
