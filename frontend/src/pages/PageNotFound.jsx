import { Link } from "react-router-dom";
import routes from "../../src/routes/routes.json";
import { Container, Text } from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <>
      {" "}
      <Container>
        <Text
          d="flex"
          justifyContent="center"
          textAlign="center"
          color="white"
          fontSize="20px"
          m="40px 0 15px 0"
        >
          <Link to={routes.HOME}>
            {" "}
            Page Not Found 404 Click Here to get back to Home Page
          </Link>
        </Text>
      </Container>
    </>
  );
};

export default PageNotFound;
