import { useState } from "react";
// import Post from "./Post";
import { Container, Divider } from "@chakra-ui/react";

const Posts = ({ res }) => {
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
      {res.map((k) => {
        <div>
          <h1>{k.pst}</h1>
        </div>;
      })}
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
    const res = await fetch(`http://localhost:3000/api/posts/get`);
    // .then((x) => x.json());
    const data = await res.json();
    return {
      props: {
        posts: JSON.parse(JSON.stringify(data)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
