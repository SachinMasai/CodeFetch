import React, { useState } from "react";
import {
  Container,
  Icon,
  Avatar,
  AvatarBadge,
  Box,
  Popover,
  PopoverTrigger,
  useDisclosure,
  Input,
  InputGroup,
  InputRightElement,
  Center,
  PopoverContent,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import Link from "next/link";
import { Myapp } from "../pages/Myapp";

const Navbar = () => {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenSearchModal,
    onOpen: onOpenSearchModal,
    onToggle: onToggleSearchModal,
    onClose: onCloseSearchModal,
  } = useDisclosure();
  const [message, setMessage] = useState(true);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [pst, setPst] = useState("");
  const [img, setImg] = useState("");
  const createPost = async () => {
    const res = await fetch("/api/posts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: pst,
        image: img,
      }),
    });
    const data = await res.json();
    console.log(data);
    onClose();
  };
  const searchf = () => {
    onToggle();
  };
  return (
    <>
      <Popover isOpen={isOpenSearchModal}>
        <PopoverTrigger>
          <Center top={"80px"} left="50vw" pos="fixed" zIndex={"10"}></Center>
        </PopoverTrigger>
        <PopoverContent width={"100%"}>
          <InputGroup>
            <Input
              alignItems={"center"}
              width={"50vw"}
              height="70px"
              // variant="filled"
              placeholder="Search"
              color={"white"}
              bg={"#123047"}
              backdropFilter={"blur(10px)"}
              fontSize="25px"
              paddingLeft={"30px"}
              _placeholder={{ opacity: 0.4 }}
              border="1px solid white"
            />
            <InputRightElement
              margin={"auto"}
              width="70px"
              color={"white"}
              height={"100%"}
              onClick={onCloseSearchModal}
              _hover={{ cursor: "pointer" }}
              children={<Icon width={"25px"} height="25px" as={IoIosSearch} />}
            />
          </InputGroup>
        </PopoverContent>
      </Popover>
      <Container
        color={"white"}
        bg={"rgba(21, 73, 109,0.9)"}
        shadow="rgba(255, 255, 255, 0.8) 0px 6px 10px;"
        backdropFilter={"blur(10px)"}
        maxW={"100%"}
        justifyContent="space-around"
        bottom="0px"
        display={"flex"}
        position={"fixed"}
        height="80px"
        alignItems={"center"}
      >
        <Box display={"flex"} justifyContent="center" w={"35px"} h="35px">
          <Icon
            _hover={{ cursor: "pointer", w: "33px", h: "33px" }}
            w={"30px"}
            h="30px"
            as={AiFillHome}
          />
        </Box>
        <Box display={"flex"} justifyContent="center" w={"35px"} h="35px">
          <Icon
            onClick={onToggleSearchModal}
            _hover={{ cursor: "pointer", w: "33px", h: "33px" }}
            w={"30px"}
            h="30px"
            as={BsSearch}
          />
        </Box>
        <Box display={"flex"} justifyContent="center" w={"35px"} h="35px">
          <Icon
            _hover={{ cursor: "pointer", w: "38px", h: "38px" }}
            w={"35px"}
            h="35px"
            as={CiSquarePlus}
            onClick={onOpen}
          />
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your post</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Input
                    ref={initialRef}
                    required
                    placeholder="Whats on your mind, Start posting"
                    onChange={(e) => {
                      setPst(e.target.value);
                    }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Add image adress</FormLabel>
                  <Input
                    placeholder="Image adress / link"
                    onChange={(e) => {
                      setImg(e.target.value);
                    }}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={createPost}>
                  Post
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        <Link href="Myapp">
          <Box
            _hover={{ cursor: "pointer" }}
            pos={"relative"}
            display={"flex"}
            justifyContent="center"
            w={"35px"}
            h="35px"
          >
            <Icon
              _hover={{ w: "33px", h: "33px" }}
              w={"30px"}
              h="30px"
              as={FaTelegramPlane}
            />
            <Box
              pos={"absolute"}
              bg={message ? "#f73131" : ""}
              top={"-5px"}
              right="-9px"
              padding={"5px 5px"}
              borderRadius="50%"
              color={"white"}
            ></Box>
          </Box>
        </Link>
        <Link href='/user/login'>
          <Avatar
            _hover={{ cursor: "pointer" }}
            name="Dhanraj"
            src=""
            border={message ? "3px solid #f73131" : ""}
          >
            <AvatarBadge boxSize={"20px"} bg="green.500" />
          </Avatar>
        </Link>
      </Container>
    </>
  );
};

export default Navbar;
