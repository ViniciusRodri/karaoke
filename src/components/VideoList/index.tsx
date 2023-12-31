import { Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface IVideoListProps {
  videos?: any;
  handleVideoClick?: any;
}

const VideoList = ({ videos = [], handleVideoClick }: IVideoListProps) => {
  return (
    <Stack>
      {videos.map((video: any) => (
        <Flex
          border="1px solid"
          borderColor="gold.500"
          gap="2"
          boxShadow="0px 4px 8px rgba(255, 215, 0, 0.3)"
          key={video.id.videoId}
          onClick={() => handleVideoClick(video.id.videoId)}
          cursor="pointer"
          _hover={{ color: 'gold.500' }}
        >
          <Image src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          <Text m="2" fontSize="14px">
            {video.snippet.title}
          </Text>
        </Flex>
      ))}
    </Stack>
  );
};
export default VideoList;
