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
    <div
      style={{
        background:
          "linear-gradient(135deg, #091926 0%,#123047 50%,#13598e 100%)",
      }}
    >
      <NavbarTop />
      <Posts />
      <Navbar />
    </div>
  );
}
