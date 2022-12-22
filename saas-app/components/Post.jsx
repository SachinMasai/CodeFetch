import {
  Avatar,
  Box,
  Container,
  Heading,
  Icon,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { FiRepeat } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const Post = () => {
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
        <Text marginBottom={"20px"}>Let that sink in!!!</Text>
      </Box>
      <Box
        width={{ lg: "80%", md: "90%", sm: "100%" }}
        margin="auto"
        borderRadius={"10px"}
        _hover={{ border: "1px solid white" }}
        marginBottom={"20px"}
        onDoubleClick={handleLike}
      >
        <Image
          width={"100%"}
          borderRadius="10px"
          src="http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsink.6c38a83c.jpg&w=1920&q=75"
        />
      </Box>
      <Box
        width={{ lg: "80%", md: "90%", sm: "100%", base: "100%" }}
        margin="auto"
        justifyContent={"space-around"}
        display={"flex"}
      >
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

        <Icon
          _hover={{ cursor: "pointer" }}
          width={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
          h={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
          as={BiComment}
        />
        <Icon
          _hover={{ cursor: "pointer" }}
          width={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
          h={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
          as={FiRepeat}
        />
      </Box>
    </Container>
  );
};

export default Post;
