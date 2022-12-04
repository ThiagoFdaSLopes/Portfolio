import { NavLink } from "react-router-dom";
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

  @media screen and (max-width: 1440px) {
    width: 85vw;
  }

  @media screen and (max-width: 1024px) {
    width: 80vw;
  }

  @media screen and (max-width: 375px) {
    width: 82vw;
    margin-left: 30px;
  }
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

  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30%;
  width: 35%;
  border-radius: 15px;
  height: 55px;

  @media screen and (max-width: 1024px) {
    width: 45%;
  }

  @media screen and (max-width: 375px) {
    margin-left: 1rem;
    width: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 600;
  margin-right: 1rem;
  font-size: 24px;
  color: white;
  text-decoration: none;

  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }

  @media screen and (max-width: 375px) {
    font-size: 14px;
    margin-right: 8px;
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 52rem;

  @media screen and (max-width: 1024px) {
    height: 44rem;
  }

  @media screen and (max-width: 375px) {
    flex-direction: column-reverse;
    align-items: center;
    height: 36rem;
  }
`;

export const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  width: 45rem;
  height: 52rem;
  
  @media screen and (max-width: 1024px) {
    margin-left: 5rem;
    width: 55rem;
  }

  @media screen and (max-width: 375px) {
    margin-left: 0;
    width: 20rem;
    height: 20rem;
  }
`;

export const SectionPhoto = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  width: 55rem;
  height: 52rem;

  @media screen and (max-width: 1024px) {
    width: 30rem;
  }

  @media screen and (max-width: 375px) {
    margin-top: 0;
    justify-content: center;
    width: 20rem;
    height: 15rem;
  }
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

  @media screen and (max-width: 1440px) {
    width: 60%;
  }

  @media screen and (max-width: 375px) {
    height: 15rem;
    width: 20rem;
    margin-top: 10px;
    margin-left: 0;
  }

  .name {
    font-family: 'League Spartan';
    margin: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    color: white;

    @media screen and (max-width: 1440px) {
      font-size: 32px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 28px;
    }
  }
  .stack {
    font-family: 'League Spartan';
    margin: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    color: white;

    @media screen and (max-width: 1440px) {
      font-size: 32px;
    }
  }

  .arrow-about {
    position: relative;
    height: 64px;
    top: 290px;
    left: 310px;

    @media screen and (max-width: 1440px) {
      top: 200px;
      left: 230px;
    }

    @media screen and (max-width: 1024px) {
      top: 200px;
      left: 230px;
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
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

  @media screen and (max-width: 1440px) {
    width: 10rem;
  }

  img {
    width: 32px;
    margin-right: 10px;

    @media screen and (max-width: 1440px) {
      width: 24px;
    }
  }

  p {
    font-family: 'League Spartan';
    font-size: 24px;
    font-weight: 700;

    @media screen and (max-width: 1440px) {
      font-size: 16px;
    }
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

    @media screen and (max-width: 1440px) {
    width: 28px;
    }
  }

  .linkedin {
    margin-right: 8px;
    width: 48px;

    @media screen and (max-width: 1440px) {
      width: 28px;
    }
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

  @media screen and (max-width: 1440px) {
    width: 23rem;
    height: 23rem;
  }

  @media screen and (max-width: 1024px) {
    width: 18rem;
    height: 18rem;
  }

  @media screen and (max-width: 375px) {
    width: 12rem;
    height: 12rem;
  }

  img {
    @media screen and (max-width: 1440px) {
      width: 23rem;
      height: 23rem;
    }
    @media screen and (max-width: 1024px) {
      width: 18rem;
      height: 18rem;
    }

    @media screen and (max-width: 375px) {
      width: 12rem;
      height: 12rem;
    }
  }
`;

export const DivPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 35rem;

  @media screen and (max-width: 375px) {
    height: 15rem;
    width: 20rem;
  }

  .react {
    position: relative;
    text-align: center;
    bottom: 155px;
    left: 180px;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    z-index: 2;

    @media screen and (max-width: 1440px) {
      left: 125px;
    }

    @media screen and (max-width: 1024px) {
      left: 123px;
      bottom: 100px;
    }

    @media screen and (max-width: 375px) {
      left: 75px;
      bottom: 80px;
    }
  }

  .javascript {
    position: relative;
    bottom: 125px;
    left: 185px;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    z-index: 3;
    @media screen and (max-width: 1440px) {
      left: 135px;
    }

    @media screen and (max-width: 1024px) {
      left: 123px;
      bottom: 70px;
    }

    @media screen and (max-width: 375px) {
      left: 80px;
      bottom: 50px;
    }
  }

  .nodejs {
    position: relative;
    bottom:90px;
    left: 185px;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    z-index: 4;
    @media screen and (max-width: 1440px) {
      left: 140px;
    }

    @media screen and (max-width: 1024px) {
      left: 115px;
      bottom: 35px;
    }

    @media screen and (max-width: 375px) {
      left: 70px;
      bottom: 12px;
    }
  }
`;

export const DivAbout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8rem;

  .header-about {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 5rem;
    margin-top: 20px;
    border-bottom: 5px solid white;

    @media screen and (max-width: 1440px) {
      border-bottom: 2.5px solid white;
    }

    p {
      font-size: 50px;
      color: white;
      @media screen and (max-width: 1440px) {
        font-size: 35px;
      }
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
  background-color: white;
  border-radius: 20px;

  @media screen and (max-width: 1440px) {
    width: 65rem;
    height: 40rem;
  }

  @media screen and (max-width: 1024px) {
    width: 51rem;
    height: 40rem;
    margin-left: 6rem;
  }

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 20rem;
    height: 60rem;
  }

  .photo-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 8rem;
    width: 20rem;
    height: 30rem;

    @media screen and (max-width: 1440px) {
      width: 10rem;
    }

    @media screen and (max-width: 1024px) {
      width: 10rem;
      margin-left: 5rem;
    }

    @media screen and (max-width: 375px) {
      width: 10rem;
      height: 12rem;
      margin-left: 0;
    }

    .photo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 85%;
      height: 18rem;
      margin-top: 20px;
      border-radius: 20px;

      @media screen and (max-width: 375px) {
        width: 10rem;
        height: 10rem;
      }

      img {
        border-radius: 20px;
        width: 17rem;
        height: 17rem;

        @media screen and (max-width: 375px) {
          width: 10rem;
          height: 10rem;
        }
      }
    }

    .frase-inspiradora {
      text-align: center;
      text-decoration: none;
      font-size: 14px;
      font-weight: 300;

      @media screen and (max-width: 375px) {
        display: none;
      }
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

    @media screen and (max-width: 375px) {
      width: 20rem;
      height: 50rem;
      margin-left: 0;
    }

    p {
      margin: 14px;
      text-align: justify;
      text-decoration: none;
      font-size: 17px;
      font-weight: 400;

      @media screen and (max-width: 1440px) {
        font-size: 14px;
      }

      @media screen and (max-width: 1024px) {
        font-size: 12px;
      }
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

  @media screen and (max-width: 1440px) {
    width: 65rem;
    height: 25rem;
  }

  @media screen and (max-width: 1024px) {
      margin-left: 4rem;
      width: 55rem;
  }

  .skills {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 5rem;
    width: 90%;
    height: 30rem;

    @media screen and (max-width: 1440px) {
      width: 65rem;
      height: 25rem;
    }

    @media screen and (max-width: 1024px) {
      width: 55rem;
    }
    .habilidades {
      background-color: white;
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 12rem;
      height: 12rem;

      @media screen and (max-width: 1440px) {
        width: 8rem;
        height: 8rem;
      }

      @media screen and (max-width: 1024px) {
        width: 6rem;
        height: 6rem;
      }

      img {
        width: 80px;
        height: 80px;
        @media screen and (max-width: 1440px) {
          width: 3rem;
          height: 3rem;
        }

        @media screen and (max-width: 1024px) {
          width: 2.5rem;
          height: 2.5rem;
        }
      }

      p {
        font-size: 18px;
        font-weight: 400;
        font-family: 'League Spartan';

        @media screen and (max-width: 1024px) {
          font-size: 15px;
        }
      }
    }
  }

  .habilidades:hover {
    -webkit-box-shadow: 1px 1px 36px -4px white;
    -moz-box-shadow: 1px 1px 36px -4px white;
    box-shadow: 1px 1px 36px -4px white;
    border: 0.1rem solid orange;
    transform: scale(1.5);

    @media screen and (max-width: 1440px) {
      transform: scale(1.2);
    }
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: 12rem;
  height: 55rem;

  @media screen and (max-width: 1440px) {
    width: 63rem;
    height: 50rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 15px;
    margin-left: 3rem;
    width: 56rem;
  }
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

  @media screen and (max-width: 1440px) {
    width: 25rem;
    height: 30rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 15px;
    margin-left: 3rem;
    width: 56rem;
  }

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

    @media screen and (max-width: 1440px) {
      height: 200px;
    }

    @media screen and (max-width: 1024px) {
      height: 200px;
    }
  }

  .DivImage img {
    width: 100%;
    height: 240px;
    @media screen and (max-width: 1440px) {
      height: 200px;
    }

    @media screen and (max-width: 1024px) {
      height: 200px;
    }
  }

  .Divinfo {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 1440px) {
      gap: 1px;
      font-size: 12px;
    }

    @media screen and (max-width: 1024px) {
      gap: 1px;
      font-size: 12px;
    }
  }

  .div-links-project {
    font-size: 12px;
    color: rgb(0, 0, 0);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 1440px) {
      font-size: 10px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 8px;
    }
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

export const DivContact = styled.div`
  width: 80%;
  height: 15rem;
  margin-left: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1440px) {
    width: 63rem;
    height: 15rem;
  }

  @media screen and (max-width: 1024px) {
    width: 55rem;
    margin-left: 5.5rem;
  }

  p {
    color: White;
    font-size: 26px;
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 3rem;
  }

  img {
    width: 48px;
    height: 48px;
    margin: 1rem;
  }
`;
