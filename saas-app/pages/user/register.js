import { Container, Heading, Input, Button, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function register() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
    alert("clicked");
    // console.log(userData);
    axios.post("/api/user", {
      userData: userData,
    });
    setUserData({
      ...userData,
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  return (
    <Container centerContent>
      <Heading>Register page</Heading>
      <br />
      <form onSubmit={registerUser}>
        <Input
          required
          mb="1"
          type="text"
          placeholder="Enter username"
          value={userData.username}
          onChange={({ target }) =>
            setUserData({ ...userData, username: target.value })
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
          type="password"
          placeholder="confirm password"
          value={userData.confirmpassword}
          onChange={({ target }) =>
            setUserData({ ...userData, confirmpassword: target.value })
          }
        />
        <br />
        <Button type="submit">Register</Button>
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
