import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import {
    AccountCircleOutlined,
  Explore,
  Flag,
  Gamepad,
  Help,
  History,
  LibraryMusic,
  LiveTv,
  MovieSharp,
  Newspaper,
  Settings,
  SettingsBrightness,
  Sports,
  Subscriptions,
  VideoLibrary,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import SignIn from "../Pages/SignIn";

const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.bg};
  height: 100vh;
  color: ${({theme}) => theme.text};
  font-size: 12px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 1px 0;
`;

const Hr = styled.hr`
    margin: 10px 0;
    border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
    padding: 5px 10px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;


const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
        <Logo>
          <Img src="https://duckduckgo.com/assets/icons/thirdparty/youtube.svg" />
          YouTube
        </Logo>
      </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <Explore />
          Explore
        </Item>
        <Item>
          <Subscriptions />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibrary />
          Library
        </Item>
        <Item>
          <History />
          History
        </Item>
        <Hr />
        <Login>
            Sign in to like videos, comment, and subscribe.
            <Link to="/signin" style={{textDecoration: "none"}} >
            <Button>
                <AccountCircleOutlined />
                SIGN IN
            </Button>
            </Link>
        </Login>
        <Hr />
        <Item>
          <LibraryMusic />
          Home
        </Item>
        <Item>
          <Sports />
          Sports
        </Item>
        <Item>
          <Gamepad />
          Gaming
        </Item>
        <Item>
          <MovieSharp />
          Movies
        </Item>
        <Item>
          <Newspaper />
          News
        </Item>
        <Item>
          <LiveTv />
          Live
        </Item>
        <Hr />
        <Item>
          <Settings />
          Settings
        </Item>
        <Item>
          <Flag />
          Report
        </Item>
        <Item>
          <Help />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightness />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
