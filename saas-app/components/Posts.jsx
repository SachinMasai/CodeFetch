import React from "react";
import Post from "./Post";
import { Container, Divider } from "@chakra-ui/react";

const Posts = () => {
  return (
    <Container
      maxW={{ xl: "60%", lg: "60%", md: "70%", sm: "90%" }}
      margin="auto"
      border={"1px solid gray"}
      borderTop="none"
      borderBottom={"none"}
      marginBottom="80px"
      paddingTop={"20px"}
      display={"flex"}
      flexDir="column"
      padding={"none"}
      gap="20px"
    >
      <Post />
      <Divider orientation="horizontal" width={"100%"} />
      <Post />
      <Divider orientation="horizontal" width={"100%"} />
      <Post />
      <Divider orientation="horizontal" width={"100%"} />
      <Post />
      <Divider orientation="horizontal" width={"100%"} />
      <Post />
      <Divider orientation="horizontal" width={"100%"} />
    </Container>
  );
};

export default Posts;
