import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Container } from "@chakra-ui/react";
import NavbarTop from "../components/NavbarTop";
import HomePage from "../components/HomePage";

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
      <HomePage />
      <Navbar />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  // get the current environment
  // let dev = process.env.NODE_ENV !== "production";
  // let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch("http://localhost:3000/api/posts");
  // extract the data
  let data = await response.json();

  return {
    props: {
      users: data["message"],
    },
  };
}
