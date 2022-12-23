import { Container, Heading, Input, Button, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCookie, getCookie } from "cookies-next";
import { loginUser } from "../../redux/auth/authSlice";

export default function login() {
  const { token } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);
    await fetch("/api/main/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(() => dispatch(loginUser()))
      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (token !== null) {
      router.push("/");
    }
    console.log(token);
  });

  // const login
  // if token present
  if (token) {
    router.push("/");
  }

  return (
    <Container centerContent width="100%" height="100vh" pt="2">
      <Heading>login page</Heading>
      <br />
      <form onSubmit={handleLogin}>
        <Input
          required
          value={email}
          type="email"
          placeholder="enter email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          required
          value={password}
          type="password"
          placeholder="enter password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <br />
        <Button type="submit">Login</Button>
        {/* <Button onClick={() => dispatch(loginUser())}>Login</Button> */}
      </form>
      <br />
      <Box>
        Not Registered? &nbsp;
        <Link href="/user/register" color="red">
          <Text display="inline-block" color="red">
            Register Here{" "}
          </Text>
        </Link>
      </Box>
    </Container>
  );
}
