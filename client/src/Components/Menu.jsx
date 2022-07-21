import React from "react";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HelpIcon from '@mui/icons-material/Help';
import FlagIcon from '@mui/icons-material/Flag';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SensorsIcon from '@mui/icons-material/Sensors';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ScreenshotMonitorOutlinedIcon from '@mui/icons-material/ScreenshotMonitorOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.bg};
  height: 100vh;
  color: ${({theme}) => theme.text};
  font-size: 14px;
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
  margin-bottom: 25px;

`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
`;

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;



const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src="https://duckduckgo.com/assets/icons/thirdparty/youtube.svg" />
          YouTube
        </Logo>
        <Item>
            <HomeIcon />
            Home
        </Item>
        <Item>
            <ExploreOutlinedIcon />
            Explore
        </Item>
        <Item>
            <ScreenshotMonitorOutlinedIcon />
            Shorts
        </Item>
        <Item>
            <SubscriptionsOutlinedIcon />
            Subscription
        </Item>
        <Hr />
        <Login>
            sign in to like videos, comments, and subscribe.
        </Login>
        <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
        </Button>
        <Hr />
        <Item>
            <LibraryAddCheckOutlinedIcon />
            Library
        </Item>
        <Item>
            <HistoryOutlinedIcon />
            History
        </Item>
        <Item>
            <SlideshowOutlinedIcon />
            Your Videos
        </Item>
        <Item>
            <HomeIcon />
            Home
        </Item>
        <Item>
            <HomeIcon />
            Home
        </Item>

        <Item>
            <HomeIcon />
            Home
        </Item>
        <Item>
            <HomeIcon />
            Home
        </Item>
        <Item>
            <HomeIcon />
            Home
        </Item>
        <Item>
            <HomeIcon />
            Home
        </Item>
        <Item>
            <HomeIcon />
            Home
        </Item>
        <Item>
            <HomeIcon />
            Home
        </Item>
        <Item>
            <HomeIcon />
            Home
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
