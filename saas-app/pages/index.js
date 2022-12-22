import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import { useSelector } from "react-redux";
import { useEffect } from "react";


export default function Home() {
  // const { isLoggedIn, token } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   console.log(isLoggedIn, token);
  // });
  return (
    <>
      <Posts />
      <Navbar />
   
    </>
  );
}
