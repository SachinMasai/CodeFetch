import { useState } from "react";
import Post from "./Post";
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
      />
      <Post
        image={
          "http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsink.6c38a83c.jpg&w=1920&q=75"
        }
        title={"Let that sink in!!!"}
        likes={9000}
        comments={800}
      />
    </Container>
  );
};

export default Posts;
