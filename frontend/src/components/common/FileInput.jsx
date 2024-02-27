import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react";

const FileInput = ({ labelName, isRequired, id, handleInput }) => {
  return (
    <>
      <FormControl id={id} isRequired={isRequired}>
        <FormLabel>{labelName}</FormLabel>
        <InputGroup size="md">
          <Input
            type="file"
            paddingTop="5px"
            accept="image/*"
            onChange={handleInput}
          />
        </InputGroup>
      </FormControl>
    </>
  );
};

export default FileInput;
