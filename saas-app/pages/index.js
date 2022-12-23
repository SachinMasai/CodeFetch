import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import SinglePost from "../components/Post";
import { Container, Divider } from "@chakra-ui/react";
import NavbarTop from "../components/NavbarTop";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#091926" }}>
      <NavbarTop />
      <Posts />
      <Navbar />
    </div>
  );
}
// export const getServerSideProps = async () => {
//   try {
//     const res = await fetch(`/api/posts/get`);

//     const data = await res.json();
//     return {
//       props: { data },
//     };
//   } catch (error) {
//     console.log(error.message);
//     return {
//       notFound: true,
//     };
//   }
// };
