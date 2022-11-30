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
  color: white;
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

  .arrow-about {
    position: relative;
    top: 290px;
    left: 310px;
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

export const DivAbout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10rem;

  .header-about {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 5rem;
    margin-top: 20px;
    border-bottom: 5px solid white;

    p {
      font-size: 50px;
      color: white;
    }
  }
`;

export const CardMe = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin-left: 12rem;
  height: 45rem;
  /* background-color: black; */

  .photo-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 8rem;
    width: 20rem;
    height: 30rem;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    -webkit-box-shadow: 1px 1px 36px -4px white;
    -moz-box-shadow: 1px 1px 36px -4px white;
    box-shadow: 1px 1px 36px -4px white;

    .photo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 85%;
      height: 18rem;
      margin-top: 20px;
      border-radius: 20px;

      img {
        border-radius: 20px;
        width: 17rem;
        height: 17rem;
      }
    }

    .frase-inspiradora {
      text-align: center;
      text-decoration: none;
      font-size: 14px;
      font-weight: 300;
    }
  }
  .description-me {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60rem;
    margin-left: 5rem;
    height: 35rem;
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, 0.8);
    -webkit-box-shadow: 1px 1px 36px -4px white;
    -moz-box-shadow: 1px 1px 36px -4px white;
    box-shadow: 1px 1px 36px -4px white;

    p {
      margin: 14px;
      text-align: justify;
      text-decoration: none;
      font-size: 17px;
      font-weight: 400;
    }
  }
`;

export const ContainerSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: 12rem;
  height: 45rem;

  .skills {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 5rem;
    width: 90%;
    height: 30rem;

    .habilidades {
      background-color: white;
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: jusitfy;
      width: 12rem;
      height: 12rem;

      img {
        width: 80px;
        height: 80px;
      }

      p {
        font-size: 18px;
        font-weight: 400;
        font-family: 'League Spartan';
      }
    }
  }

  .habilidades:hover {
    -webkit-box-shadow: 1px 1px 36px -4px white;
    -moz-box-shadow: 1px 1px 36px -4px white;
    box-shadow: 1px 1px 36px -4px white;
    border: 0.2rem solid white;
    transform: scale(1.1);
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: 12rem;
  height: 55rem;
`;

export const DivProject = styled.div`
  padding: 1rem;
  border-radius: 5px;
  color: black;
  background-color: white;
  width: 25rem;
  height: 40rem;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;

  .DivImage {
    width: 100%;
    height: 240px;
    border-radius: 5px;
    background-color: rgb(238, 238, 238);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .DivImage img {
    width: 100%;
    height: 240px;
  }

  .Divinfo {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .div-links-project {
    font-size: 12px;
    color: rgb(0, 0, 0);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
  }

  .div-links-project img {
    width: 32px;
    height: 32px;
  }

  .div-links-project a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 5px;
    color: rgb(0, 0, 0);
  }

  .div-stacks {
    width: 20rem;
    height: 2rem;
  }

  .div-stacks img {
    width: 24px;
    height: 24px;
    margin: 3px;
    padding: 3px;
  }
`;


