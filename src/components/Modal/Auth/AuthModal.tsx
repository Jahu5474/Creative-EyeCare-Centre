import React from 'react';
import {useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalCloseButton, ModalBody} from '@chakra-ui/react'

const AuthModal: React.FC = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                Here is the modal body
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
        
}
export default AuthModal