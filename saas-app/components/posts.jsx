import { useState, useEffect } from "react";
import SinglePost from "./Post";
import { Container, Divider } from "@chakra-ui/react";
// import { GetServerSideProps } from "next";
const getData = () => {
  return fetch(`/api/posts/get`).then((res) => res.json());
};
const Posts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData()
      .then((res) => {
        setLoading(false);
        setData(res.post);
        console.log(res.post);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [data]);
  return (
    <Container
      bg={"#091926"}
      color="white"
      maxW={{ xl: "60%", lg: "60%", md: "70%", sm: "90%" }}
      margin="auto"
      border={"1px solid white"}
      borderTop="none"
      borderBottom={"none"}
      marginBottom="80px"
      paddingTop={"100px"}
      display={"flex"}
      flexDir="column"
      padding={"none"}
      gap="20px"
    >
      {data?.map((k) => (
        <SinglePost desc={k.description} imge={k.image} />
      ))}
    </Container>
  );
};

export const GetServerSideProps = async () => {
  try {
    const res = await fetch(`/api/posts/get`);

    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error.message);
    return {
      notFound: true,
    };
  }
};
export default Posts;
