import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const LabelInput = ({
  labelName,
  placeHolderValue,
  isRequired,
  id,
  handleInput,
  inputRightElement,
  handleClicked,
  show,
  inputValue,
}) => {
  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{labelName}</FormLabel>
      <InputGroup size="md">
        <Input
          value={inputValue}
          placeholder={placeHolderValue}
          onChange={handleInput}
          type={inputRightElement && (show ? "text" : "password")}
        />
        {inputRightElement && (
          <InputRightElement w="auto">
            <Button
              h="1.75rem"
              size="md"
              onClick={handleClicked}
              m="8px"
              p="8px"
            >
              {" "}
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};

export default LabelInput;
