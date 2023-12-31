import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { ReactElement, useState } from 'react';
import InputSearch from '../Inputs/InputSearch';
import VideoList from '../VideoList';
import VideoPage from '../VideoPage';

const Home = (): ReactElement => {
  const router = useRouter();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Função para buscar vídeos (substitua por chamada real à API do YouTube)
  const fetchVideos = async (searchTerm: any) => {
    // Substitua esta lógica pela chamada real à API do YouTube
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=AIzaSyCgayYHddGZ6mi5ih0U8HWP5_DKfo2i5q8`,
    );
    const data = await response.json();
    setVideos(data.items);
  };

  const handleSearch = (searchTerm: any) => {
    const searchTermWithKaraoke = `karaoke ${searchTerm}`;
    fetchVideos(searchTermWithKaraoke);
  };

  const handleVideoClick = (videoId: any) => {
    setSelectedVideo(videoId);
  };

  const handleBack = () => {
    setSelectedVideo(null);
  };

  return (
    <Flex p="5" gap="10" height="100vh" flexDirection="column" background="white.500">
      <Box margin="0 auto">
        <Text
          fontSize="40px"
          bgGradient="linear(to-r, #FFDF00, #FFCC00, #ECBD00, #CC9900, #B8860B)"
          bgClip="text"
          fontWeight="bold"
        >
          Karaoke de Reveilon
        </Text>
      </Box>

      {selectedVideo ? (
        <VideoPage videoId={selectedVideo} setBack={handleBack} />
      ) : (
        <>
          <Flex justifyContent="flex-start" flexDirection="column" gap="2">
            <Text fontSize="20px" color="gold.500">
              Pesquise aqui sua música:
            </Text>
            <InputSearch onchange={(e: any) => handleSearch(e.target.value)} />
          </Flex>
          <VideoList videos={videos} handleVideoClick={handleVideoClick} />
        </>
      )}
    </Flex>
  );
};

export default Home;
