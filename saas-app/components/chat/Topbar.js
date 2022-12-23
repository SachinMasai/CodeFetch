import { Flex, Heading, Avatar } from "@chakra-ui/react";

export default function Topbar({ email }) {
  return (
    <Flex bg="gray.5000" h="81px" w="100%" align="center" color={"white"} p={5}>
      <Avatar src="" marginEnd={3} />
      <Heading size="lg">{email}</Heading>
    </Flex>
  );
}
