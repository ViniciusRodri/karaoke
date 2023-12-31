import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

interface IModalRatingProps {
  isOpen?: any;
  onClose?: any;
}

const ModalRating = ({ isOpen, onClose }: IModalRatingProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Parabéns você arrassou!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src="/thumbs-thumbs-up-kid.gif" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ModalRating;
