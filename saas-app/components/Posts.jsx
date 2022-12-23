import { useState } from "react";
// import Post from "./Post";
import { Container, Divider } from "@chakra-ui/react";

const Posts = () => {
  const [data, setdata] = useState([]);
  return (
    <Container
      maxW={{ xl: "60%", lg: "60%", md: "70%", sm: "90%" }}
      margin="auto"
      border={"1px solid gray"}
      borderTop="none"
      borderBottom={"none"}
      marginBottom="80px"
      paddingTop={"20px"}
      display={"flex"}
      flexDir="column"
      padding={"none"}
      gap="20px"
    >
      <Post
        image={
          "http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsink.6c38a83c.jpg&w=1920&q=75"
        }
        title={"Let that sink in!!!"}
        likes={9000}
        comments={800}
      />
      {/* <Post
        image={
          "http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsink.6c38a83c.jpg&w=1920&q=75"
        }
        title={"Let that sink in!!!"}
        likes={9000}
        comments={800}
      />
      <Post
        image={
          "http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsink.6c38a83c.jpg&w=1920&q=75"
        }
        title={"Let that sink in!!!"}
        likes={9000}
        comments={800}
      />
      <Post
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

const connect = require("../config/db");
const Post = require("../featurs/posts/posts.model");

export const getServerSideProps = async () => {
  try {
    console.log("CONNECTING TO MONGO");
    await connect();
    console.log("CONNECTED TO MONGO");

    console.log("FETCHING POSTS");
    const posts = await Post.find();
    console.log("FETCHED POSTS");

    return {
      props: {
        tests: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
