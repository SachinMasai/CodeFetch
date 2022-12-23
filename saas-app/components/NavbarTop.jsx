import {
  Container,
  Tabs,
  Tab,
  TabList,
} from "@chakra-ui/react";
import React from "react";

const NavbarTop = () => {
  return (
    <Container
      color={"white"}
      bg={"rgba(9, 25, 38,0.8)"}
      backdropFilter={"blur(10px)"}
      maxW={"100%"}
      justifyContent="center"
      top={"0px"}
      margin="auto"
      display={"flex"}
      borderBottom={"1px"}
      position={"fixed"}
      zIndex="10"
      height="80px"
      alignItems={"end"}
    >
      <Tabs
        width={{ xl: "60%", lg: "60%", md: "70%", sm: "90%" }}
        isFitted
        variant={'enclosed'}
      >
        <TabList gap={"10px"}>
          <Tab _hover={{ bg: "rgba(255, 255, 255,0.2)" }}>Feed</Tab>
          <Tab _hover={{ bg: "rgba(255, 255, 255,0.2)" }}>Trending</Tab>
          <Tab _hover={{ bg: "rgba(255, 255, 255,0.2)" }}>News</Tab>
          <Tab _hover={{ bg: "rgba(255, 255, 255,0.2)" }}>Sports</Tab>
          <Tab _hover={{ bg: "rgba(255, 255, 255,0.2)" }}>Entertainment</Tab>
        </TabList>
      </Tabs>
    </Container>
  );
};

export default NavbarTop;
