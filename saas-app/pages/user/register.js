import { Container, Heading, Input, Button, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    // console.log(userData);
    const res = await fetch("/api/main/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        image: userData.image,
      }),
    });

    console.log(res);

    setUserData({
      ...userData,
      name: "",
      email: "",
      password: "",
      image: "",
    });
  };

  // useEffect(() => {
  //   console.log(users);
  // });

  return (
    <Container centerContent width="100%" height="100vh" pt="2">
      <Heading>Register</Heading>
      <br />
      <form onSubmit={registerUser}>
        <Input
          required
          mb="1"
          type="text"
          placeholder="Enter name"
          value={userData.name}
          onChange={({ target }) =>
            setUserData({ ...userData, name: target.value })
          }
        />
        <Input
          required
          mb="1"
          type="email"
          placeholder="Enter email"
          value={userData.email}
          onChange={({ target }) =>
            setUserData({ ...userData, email: target.value })
          }
        />
        <Input
          required
          mb="1"
          type="password"
          placeholder="set password"
          value={userData.password}
          onChange={({ target }) =>
            setUserData({ ...userData, password: target.value })
          }
        />
        <Input
          required
          mb="1"
          type="text"
          placeholder="image url"
          value={userData.image}
          onChange={({ target }) =>
            setUserData({ ...userData, image: target.value })
          }
        />
        <br />
        <Button type="submit" color="white" bg="darkred">Register</Button>
      </form>

      <br />
      <Box>
        Registered Already? &nbsp;
        <Link href="/user/login" color="red">
          <Text display="inline-block" color="red">
            Login Here{" "}
          </Text>
        </Link>
      </Box>
    </Container>
  );
}

// export async function getServerSideProps(ctx) {
//   // get the current environment
//   // let dev = process.env.NODE_ENV !== "production";
//   // let { DEV_URL, PROD_URL } = process.env;

//   // request posts from api
//   let response = await fetch("http://localhost:3000/api/posts");
//   // extract the data
//   let data = await response.json();

//   return {
//     props: {
//       users: data["message"],
//     },
//   };
// }
