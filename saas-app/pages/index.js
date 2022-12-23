import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Container } from "@chakra-ui/react";
import NavbarTop from "../components/NavbarTop";

export default function Home() {
  // const { isLoggedIn, token } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   console.log(isLoggedIn, token);
  // });
  return (
    <div style={{ backgroundColor: "#091926" }}>
      <NavbarTop />
      <Posts />
      <Navbar />
    </div>
  );
}
