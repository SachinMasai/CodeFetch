import { useState } from "react";
import SinglePost from "./Post";
import { Container } from "@chakra-ui/react";
// { posts }
const Posts = () => {
  const [data, setdata] = useState([]);
  // console.log(posts);
  return (
    <Container
      bg={"#091926"}
      color="white"
      maxW={{ xl: "60%", lg: "60%", md: "70%", sm: "90%" }}
      margin="auto"
      // border={"0.1px solid white"}
      shadow={
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
      }
      borderTop="none"
      borderBottom={"none"}
      marginBottom="80px"
      paddingTop={"100px"}
      display={"flex"}
      flexDir="column"
      padding={"none"}
      gap="20px"
      style={{
        background:
          "linear-gradient(135deg, #091926 0%,#123047 50%,#13598e 100%)",
      }}
    >
      {posts?.map((k) => (
        <SinglePost desc={k.description} imge={k.image} />
      ))}
      {/* <Post
        image={
          "http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsink.6c38a83c.jpg&w=1920&q=75"
        }
        title={"Let that sink in!!!"}
        likes={9000}
        comments={800}
      /> */}
    </Container>
  );
};

export default Posts;

// const connect = require("../config/db");
// const Post = require("../featurs/posts/posts.model");

export const getServerSideProps = async () => {
  try {
    const res = await fetch(`/api/posts/get`);
    // .then((x) => x.json());
    const data = await res.json();
    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
