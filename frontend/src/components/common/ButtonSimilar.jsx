import { Button } from "@chakra-ui/react";

const ButtonSimilar = ({ label, btnColor, submitHandler }) => {
  return (
    <>
      <Button
        colorScheme={btnColor}
        w="100%"
        marginTop="15px"
        onClick={submitHandler}
      >
        {label}
      </Button>
    </>
  );
};

export default ButtonSimilar;
