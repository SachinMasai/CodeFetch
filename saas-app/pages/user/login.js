import { Container, Heading, Input, Button, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/Auth/authSlice";
import { setCookie, getCookie } from "cookies-next";

export default function login() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

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
    <Container centerContent>
      <Heading>login page</Heading>
      <br />
      <Input type="email" placeholder="enter email" />
      <Input type="password" placeholder="enter password" />
      <br />
      <Button onClick={() => dispatch(loginUser())}>Login</Button>
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
