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
  useDisclosure,
  SlideFade,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";


const SinglePost = ({ image, description, likes, comments }) => {
  const [lessThan550] = useMediaQuery("(max-width: 550px)");
  const [like, setLike] = useState(true);
  const { isOpen, onToggle } = useDisclosure();
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const addComment = () => {
    setAllComments([...allComments, comment]);
    setComment("");
  };
  const handleLike = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };
  const handleShow = () => {
    if (show) {
      setShow(false);
      onToggle();
    } else {
      setShow(true);
      onToggle();
    }
  };
  return (
    <>
      <Container color={"white"} maxW={"100%"}>
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
          <Text marginBottom={"20px"}>{description}</Text>
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
          <Box
            onClick={handleShow}
            display={"flex"}
            flexDir="column"
            alignItems="center"
          >
            <Icon
              _hover={{ cursor: "pointer" }}
              width={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
              h={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
              as={BiComment}
            />
            <Text>{allComments.length}</Text>
          </Box>

          <Icon
            _hover={{ cursor: "pointer" }}
            width={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
            h={{ lg: "25px", md: "20px", sm: "20px", base: "25px" }}
            as={FaTelegramPlane}
          />
        </Box>
      </Container>
      {show ? (
        <SlideFade in={isOpen} offsetY="40px">
          <Box w={"100%"}>
            <Box padding={"20px"}>
              {allComments.map((item) => {
                return (
                  <Box display={"flex"} gap="10px" padding={"5px"}>
                    <Avatar name="Sachin" size={"xs"} />
                    <Text>{item}</Text>
                  </Box>
                );
              })}
            </Box>
            <InputGroup>
              <Input
                alignItems={"center"}
                width={"100%"}
                height="40px"
                variant="filled"
                placeholder="Add a comment..."
                color={"gray"}
                fontSize="15px"
                paddingLeft={"30px"}
                _placeholder={{ opacity: 0.4 }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <InputRightElement
                width="50px"
                height={"100%"}
                onClick={addComment}
                _hover={{ cursor: "pointer" }}
                children={
                  <Icon width={"20px"} height="25px" as={RiSendPlaneLine} />
                }
              />
            </InputGroup>
          </Box>
        </SlideFade>
      ) : (
        ""
      )}

      <Divider orientation="horizontal" width={"100%"} color="white" />
    </>
  );
};

export default SinglePost;
