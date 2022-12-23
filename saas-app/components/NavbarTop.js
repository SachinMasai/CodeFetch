import {
  Container,
  Tabs,
  Tab,
  TabList,
  Image,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const NavbarTop = () => {
  const [lessThan1024] = useMediaQuery("(max-width: 850px)");
  return (
    <Container
      color={"white"}
      bg={"rgba(9, 25, 38,0.8)"}
      backdropFilter={"blur(10px)"}
      maxW={"100%"}
      justifyContent="center"
      // gap={"20px"}
      top={"0px"}
      shadow="rgba(255, 255, 255, 0.8) 0px 1px 8px;"
      margin="auto"
      display={"flex"}
      position={"fixed"}
      zIndex="10"
      height="80px"
      // alignItems={"end"}
    >
      <Image pos={"fixed"} left={lessThan1024?"":"0"} top="-8" width={"190px"} src="/logo.png" />
      {lessThan1024 ? (
        ""
      ) : (
        <Box
          display="flex"
          alignItems={"end"}
          width={{ xl: "60%", lg: "60%", md: "70%", sm: "90%" }}
        >
          <Tabs width={"100%"} isFitted variant={"enclosed"}>
            <TabList gap={"10px"}>
              <Tab _hover={{ bg: "rgba(255, 255, 255,0.2)" }}>Feed</Tab>
              <Tab _hover={{ bg: "rgba(255, 255, 255,0.2)" }}>Trending</Tab>
              <Tab _hover={{ bg: "rgba(255, 255, 255,0.2)" }}>News</Tab>
              <Tab _hover={{ bg: "rgba(255, 255, 255,0.2)" }}>Sports</Tab>
              <Tab _hover={{ bg: "rgba(255, 255, 255,0.2)" }}>
                Entertainment
              </Tab>
            </TabList>
          </Tabs>
        </Box>
      )}
    </Container>
  );
};

export default NavbarTop;
