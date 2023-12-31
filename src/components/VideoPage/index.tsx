import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import ModalRating from '../Modal/ModalRating';
import CustomModal from '../Modal/ModalCountdown';
import YouTube from 'react-youtube';

interface IVideoPageProps {
  videoId?: string;
  setBack?: () => void;
}

const VideoPage = ({ videoId, setBack }: IVideoPageProps) => {
  const [showModal, setShowModal] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const onEnd = () => {
    setVideoEnded(true);
    setShowModal(true); // Mostra o modal de classificação quando o vídeo terminar
  };

  return (
    <>
      <Flex flexDirection="column">
        <Flex pb="5" alignItems="center" cursor="pointer" gap="1" onClick={setBack}>
          <Box>
            <IoIosArrowBack size={10} />
          </Box>
          <Text fontSize="14px">Voltar</Text>
        </Flex>

        <Flex m="4" alignItems="center" justifyContent="center" position="relative">
          <YouTube
            videoId={videoId}
            opts={{
              width: '1300',
              height: '500',
              padding: '10px',
              playerVars: {
                autoplay: 1,
                controls: 1,
              },
            }}
            onEnd={onEnd}
          />
        </Flex>
      </Flex>

      <ModalRating isOpen={videoEnded} onClose={() => setVideoEnded(false)} />
    </>
  );
};

export default VideoPage;
