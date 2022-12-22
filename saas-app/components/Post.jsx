import {
  Avatar,
  Box,
  Container,
  Heading,
  Icon,
  Image,
  Text,
  useMediaQuery,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiComment } from "react-icons/bi";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
const Post = ({ image, title, likes, comments }) => {
  const [lessThan550] = useMediaQuery("(max-width: 550px)");
  const [like, setLike] = useState(true);
  const handleLike = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };
  return (
    <>
      <Container maxW={"100%"}>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems="center"
          marginBottom={"20px"}
        >
          <Box display={"flex"} gap={"10px"} alignItems="center">
            {lessThan550 ? (
              <Avatar size={"sm"} name="Dhanraj" />
            ) : (
              <Avatar name="Dhanraj" />
            )}
            {lessThan550 ? (
              <Heading size={"sm"}>Dhanraj Jagtap</Heading>
            ) : (
              <Heading size={"md"}>Dhanraj Jagtap</Heading>
            )}

            {lessThan550 ? (
              ""
            ) : (
              <Heading size={"sm"} fontWeight="" color={"gray"}>
                @jagtapdhanraj
              </Heading>
            )}
          </Box>
          <Box>
            <Icon w={"20px"} h="20px" as={BiDotsHorizontalRounded} />
          </Box>
        </Box>
        <Box width={{ lg: "80%", md: "90%", sm: "100%" }} margin="auto">
          <Text marginBottom={"20px"}>{title}</Text>
        </Box>
        <Box
          width={{ lg: "80%", md: "90%", sm: "100%" }}
          margin="auto"
          borderRadius={"10px"}
          _hover={{ border: "1px solid white" }}
          marginBottom={"20px"}
          onDoubleClick={handleLike}
        >
          <Image width={"100%"} borderRadius="10px" src={image} />
        </Box>
        <Box
          width={{ lg: "80%", md: "90%", sm: "100%", base: "100%" }}
          margin="auto"
          justifyContent={"space-around"}
          display={"flex"}
        >
          <Box display={"flex"} flexDir="column" alignItems="center">
            {like ? (
              <Icon
                _hover={{ cursor: "pointer" }}
                onClick={handleLike}
                width={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
                h={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
                color={"red"}
                as={AiFillHeart}
              />
            ) : (
              <Icon
                _hover={{ cursor: "pointer" }}
                onClick={handleLike}
                width={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
                h={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
                as={AiOutlineHeart}
              />
            )}
            <Text>{likes}</Text>
          </Box>
          <Box display={"flex"} flexDir="column" alignItems="center">
            <Icon
              _hover={{ cursor: "pointer" }}
              width={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
              h={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
              as={BiComment}
            />
            <Text>{comments}</Text>
          </Box>
          <Icon
            _hover={{ cursor: "pointer" }}
            width={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
            h={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
            as={FaTelegramPlane}
          />
        </Box>
      </Container>
      <Divider orientation="horizontal" width={"100%"} />
    </>
  );
};

export default Post;
