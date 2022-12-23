import { Avatar } from "@chakra-ui/avatar";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  Box,
  DrawerContent,
  Icon,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { AiOutlineRight } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../../firebaseconfig";
import getOtherEmail from "../../zother/getoEmails";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Sidebar() {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const router = useRouter();
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const redirect = (id) => {
    router.push(`/chat/${id}`);
  };
  useEffect(() => {
    onOpen();
  }, []);
  const chatExists = (email) =>
    chats?.find(
      (chat) => chat.users.includes(user.email) && chat.users.includes(email)
    );

  const newChat = async () => {
    const input = prompt("Enter email of chat recipient");
    if (!chatExists(input) && input != user.email) {
      await addDoc(collection(db, "chats"), { users: [user.email, input] });
    }
  };

  const chatList = () => {
    return chats
      ?.filter((chat) => chat.users.includes(user.email))
      .map((chat) => (
        <Flex
          key={Math.random()}
          p={3}
          align="center"
          _hover={{ bg: "#163045", cursor: "pointer" }}
          onClick={() => {
            redirect(chat.id);
            onClose();
          }}
        >
          <Avatar src={getOtherEmail(chat.users.photoURL)} marginEnd={3} />
          <Text>{getOtherEmail(chat.users, user)}</Text>
        </Flex>
      ));
  };

  return (
    <>
      <Button
        ref={btnRef}
        width={"2px"}
        height="100%"
        onClick={onOpen}
        borderRadius={"none"}
        _hover={{ bg: "#091926" }}
        bg={"#13598e"}
        color="white"
      >
        <Icon width={"80px"} fontWeight="bold" as={AiOutlineRight} />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={btnRef}
      >
        <DrawerContent>
          <Flex
            // bg="blue.100"
            h="100%"
            w="310px"
            color={"white"}
            borderEnd="1px solid"
            borderColor="gray.200"
            direction="column"
            backgroundColor="#091926"
          >
            <Flex
              // bg="red.100"
              h="150px"
              w="100%"
              align="center"
              justifyContent="space-between"
              borderBottom="1px solid"
              borderColor="gray.200"
              backgroundColor="#13598e"
              p={3}
              height="auto"
            >
              <Box>
                <Flex
                  mb="10px"
                  mt={"10px"}
                  width={"100%"}
                  align={"center"}
                  height={"40px"}
                >
                  <Image
                    onClick={() => router.push("/")}
                    width={"100px"}
                    src="/logo.png"
                    _hover={{ cursor: "pointer" }}
                  />
                  <DrawerCloseButton _hover={{ bg: "#091926" }} />
                </Flex>
                <Flex align={"center"} gap="10px">
                  <Flex align="center">
                    <Avatar src={user.photoURL} marginEnd={5} />
                    <Text fontSize="25px" fontFamily="Times New Roman">
                      {user.displayName}
                    </Text>
                  </Flex>
                  <IconButton
                    _hover={{ bg: "#091926" }}
                    bg={"#13598e"}
                    size="sm"
                    isRound
                    icon={<ArrowLeftIcon />}
                    onClick={() => signOut(auth)}
                  />
                </Flex>
              </Box>
            </Flex>
            <Button
              backgroundColor="#13598e"
              m={5}
              p={4}
              _hover={{ bg: "#163045" }}
              onClick={() => newChat()}
            >
              New Chat/Search
            </Button>

            <Flex
              overflowX="scroll"
              direction="column"
              sx={{ scrollbarWidth: "none" }}
              flex={1}
            >
              {chatList()}
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}
