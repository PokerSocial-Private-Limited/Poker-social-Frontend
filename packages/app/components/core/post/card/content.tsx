import React, { Component } from 'react'
import { Modal, FormControl, Input, Button, Center, VStack, Text } from 'native-base'
import { useState } from 'react';
export function PostCardContent({ content }: { content?: string }) {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (

    <Text px={60} py={4} fontSize="sm">
      {content}
    </Text>


    //   const [showModal, setShowModal] = useState(false);
    //   return <Center>
    //     <Button onPress={() => setShowModal(true)} bg="#1A2235"> {content}</Button>
    //     <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
    //       _dark: {
    //         bg: "coolGray.800"
    //       },
    //       bg: "#3ABEFE"
    //     }}>

    //       <Modal.CloseButton />

    //       <Modal.Body>
    //         <Text bg="#1A2235" px={60} py={4} fontSize="sm">
    //           {content}
    //         </Text>
    //       </Modal.Body>

    //       {/* <Button.Group space={2}>
    //             <Button variant="ghost" colorScheme="blueGray" onPress={() => {
    //               setShowModal(false);
    //             }}>
    //               Cancel
    //             </Button>
    //             <Button onPress={() => {
    //               setShowModal(false);
    //             }}>
    //               Save
    //             </Button>
    //           </Button.Group> */}


    //     </Modal>
    //   </Center >;
    // };



  )
}


