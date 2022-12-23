import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import SinglePost from "../components/Post";
import { Container, Divider } from "@chakra-ui/react";

import NavbarTop from "../components/NavbarTop";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #091926 0%,#123047 50%,#13598e 100%)",
      }}
    >
      <NavbarTop />
      <HomePage />
      <Navbar />
    </div>
  );
}
