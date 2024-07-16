import { Box } from "@chakra-ui/layout";
import "./style.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      //bg="#DAF7A6"
     // bg="#90EE90"
      //bg="black"
      bg= "linear-gradient(180deg,#a4fbc4,#fdffe1a0 60%)"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      
    </Box>
  );
};

export default ChatBox;