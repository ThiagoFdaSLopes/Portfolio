import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  height: 55px;
  margin-top: 100px;
  margin-left: 110px;
  margin-right: 110px;
  border-radius: 10px;
  background-color: #403DF3;
`;

export const Logo = styled.p`
  width: 140px;
  height: 50px;
  font-family: 'League Spartan', sans-serif;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  line-height: 55px;
  padding: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30%;
  width: 35%;
  border-radius: 15px;
  height: 55px;
`;

export const StyledLink = styled(Link)`
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 600;
  margin-right: 1rem;
  font-size: 24px;
  color: white;
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 52rem;
`;

export const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  width: 45rem;
  height: 52rem;
`;

export const SectionPhoto = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55rem;
  height: 52rem;
`;

export const DivApresentacao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 20rem;
  margin-top: 13rem;
  margin-left: 6rem;
  /* background-color: blue; */

  .name {
    font-family: 'League Spartan';
    margin: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    color: white;
  }
  .stack {
    font-family: 'League Spartan';
    margin: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    color: white;
  }
`;

export const DivSaudacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 3rem;
  margin-bottom: 10px;
  border-radius: 25px;
  background-color: white;

  img {
    width: 32px;
    margin-right: 10px;
  }

  p {
    font-family: 'League Spartan';
    font-size: 24px;
    font-weight: 700;
  }
`;

export const DivLinks = styled.div`
  display: flex;
  width:  200px;
  height: 50px;
  margin-left: 2rem;
  justify-content: center;
  align-items: center;

  .github {
    width: 52px;
  }

  .linkedin {
    margin-right: 8px;
    width: 48px;
  }
`;

export const Circle = styled.div`
  width: 450px;
  height: 450px;
  position: absolute;
  border-radius: 100%;
  background-color: black;
  -webkit-box-shadow: 1px 1px 36px -4px white;
  -moz-box-shadow: 1px 1px 36px -4px white;
  box-shadow: 1px 1px 36px -4px white;
  z-index: 1;
`;

export const DivPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 35rem;
  /* background-color: beige; */

  .react {
    position: relative;
    text-align: center;
    bottom: 155px;
    left: 180px;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    z-index: 2;
  }

  .javascript {
    position: relative;
    bottom: 125px;
    left: 185px;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    z-index: 3;
  }

  .nodejs {
    position: relative;
    bottom:90px;
    left: 185px;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    z-index: 4;
  }
`;
