import {
  AddTaskOutlined,
  ReplyOutlined,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Comments from "../Components/Comments";
import Card from '../Components/Card'

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const videoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recomendations = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: #fff;
  border: none;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <videoWrapper>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/6LrMxUy2xtk"
            title="Wakadinali Ft Dyana Cods (Official Music Video)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </videoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,143 views . Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined /> 765,433,344
            </Button>
            <Button>
              <ThumbDownOutlined /> Dislike
            </Button>
            <Button>
              <ReplyOutlined /> Share
            </Button>
            <Button>
              <AddTaskOutlined /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/ytc/AKedOLSjnYAryc2VN8DhkkgsdbBU9hE7pT5H6Kbmyr7jNQ=s88-c-k-c0x00ffffff-no-rj" />
            <ChannelDetail>
              <ChannelName>Wakadinali</ChannelName>
              <ChannelCounter>1M Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                optio, ut est, tempore debitis eius veniam at harum mollitia
                quia exercitationem porro animi hic repellendus fuga suscipit,
                voluptate reprehenderit sed.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr/>
        <Comments />
      </Content>
      <Recomendations>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>

      </Recomendations>
    </Container>
  );
};

export default Video;
