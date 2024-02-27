import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Vartalap Application
        </Text>
      </Box>
      <Box bg={"white"} w="100%" borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList margin="4px" mb="1em">
            <Tab width="50%">Login-in</Tab>
            <Tab width="50%">Sign-up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* loginPart */}
              <Login />
            </TabPanel>
            <TabPanel>
              {/* signup */}
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
