import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const NavbarTop = () => {
  return (
    <Container
      color={"white"}
      bg={"rgba(9, 25, 38,0.8)"}
      backdropFilter={"blur(10px)"}
      maxW={"110%"}
      justifyContent="space-around"
      top={"0px"}
      margin="auto"
      display={"flex"}
      borderBottom={"1px"}
      position={"fixed"}
      zIndex="10"
      height="80px"
      alignItems={"center"}
    >
      <Grid
        justifyContent={"center"}
        maxW={{ xl: "60%", lg: "60%", md: "70%", sm: "90%" }}
        display="grid"
        gridTemplateColumns={"repeat(2,1fr)"}
        gap={"10px"}
        height="100%"
        alignItems={"center"}
      >
        <GridItem border={"1px solid"}>Feed</GridItem>
        <Box>Trending</Box>
        <Box></Box>
        <Box></Box>
      </Grid>
    </Container>
  );
};

export default NavbarTop;
