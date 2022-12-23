import { Container, Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import LeftSide from "./Left";
import Posts from "./Posts";
import RightSide from "./Right";

const HomePage = () => {
  const [lessThan1024] = useMediaQuery("(max-width: 1024px)");
  return (
    <Container display={"flex"} maxW={"100%"}>
      <Flex width={"100%"}>
        {lessThan1024 ? "" : <LeftSide />}
        <Posts />
        {lessThan1024 ? "" : <RightSide />}
      </Flex>
    </Container>
  );
};

export default HomePage;
