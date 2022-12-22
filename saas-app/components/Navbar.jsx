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
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [message, setMessage] = useState(true);

  return (
    <>
      <Popover isOpen={isOpen}>
        <PopoverTrigger>
          <Center top={"0"} left="50vw" pos="fixed" zIndex={"10"}></Center>
        </PopoverTrigger>
        <PopoverContent width={"100%"}>
          <InputGroup>
            <Input
              alignItems={"center"}
              width={"50vw"}
              height="70px"
              variant="filled"
              placeholder="Search"
              color={"gray"}
              fontSize="25px"
              paddingLeft={"30px"}
              _placeholder={{ opacity: 0.4 }}
            />
            <InputRightElement
              margin={"auto"}
              width="70px"
              height={"100%"}
              onClick={onClose}
              _hover={{ cursor: "pointer" }}
              children={<Icon width={"25px"} height="25px" as={IoIosSearch} />}
            />
          </InputGroup>
        </PopoverContent>
      </Popover>
      <Container
        bg={"rgba(255,255,255,0.8)"}
        backdropFilter={"blur(10px)"}
        maxW={"100%"}
        justifyContent="space-around"
        bottom="0px"
        display={"flex"}
        borderTop={"1px"}
        position={"fixed"}
        height="80px"
        alignItems={"center"}
      >
        <Icon
          _hover={{ cursor: "pointer" }}
          w={"30px"}
          h="30px"
          as={AiFillHome}
        />
        <Icon
          onClick={onToggle}
          _hover={{ cursor: "pointer" }}
          w={"30px"}
          h="30px"
          as={BsSearch}
        />
        <Icon
          _hover={{ cursor: "pointer" }}
          w={"35px"}
          h="35px"
          as={CiSquarePlus}
        />
        <Box _hover={{ cursor: "pointer" }} pos={"relative"}>
          <Icon w={"30px"} h="30px" as={FaTelegramPlane} />
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
        <Avatar
          _hover={{ cursor: "pointer" }}
          name="Dhanraj"
          src=""
          border={message ? "3px solid #f73131" : ""}
        >
          <AvatarBadge boxSize={"20px"} bg="green.500" />
        </Avatar>
      </Container>
    </>
  );
};

export default Navbar;
