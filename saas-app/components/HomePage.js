import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import LeftSide from "./Left";
import Posts from "./Posts";
import RightSide from "./Right";

const HomePage = () => {
  return (
    <Container display={"flex"} maxW={"100%"}>
      <Flex width={"100%"}>
      <LeftSide />
        <Posts />
      </Flex>
      <RightSide />
    </Container>
  );
};

export default HomePage;
