import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface ICustomModalProps {
  isOpen?: boolean;
  countdownTime: number;
  onClose?: () => void;
}

const CustomModal = ({ isOpen, onClose, countdownTime }: ICustomModalProps) => {
  if (!isOpen) return null;

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      zIndex={1000}
      onClick={onClose}
    >
      <Text color="white" fontSize="8rem">
        {countdownTime}
      </Text>
    </Flex>
  );
};

export default CustomModal;
