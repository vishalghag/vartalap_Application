import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import LabelInput from "../common/LabelInput";
import FileInput from "../common/FileInput";
import ButtonSimilar from "../common/ButtonSimilar";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [inputRightElement, setInputRightElement] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState("");

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordInput = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePicInput = (e) => {
    setPic(e.target.value);
  };

  const handleClicked = () => {
    setShow(!show);
  };

  return (
    <VStack spacing="5px">
      <LabelInput
        labelName={"Name"}
        placeHolderValue={"Enter Your Name"}
        id={"firstName"}
        isRequired={"isRequired"}
        onChange={handleNameInput}
      />
      <LabelInput
        labelName={"Email"}
        placeHolderValue={"Enter Your Email"}
        id={"email"}
        isRequired={"isRequired"}
        onChange={handleEmailInput}
      />
      <LabelInput
        labelName={"Password"}
        placeHolderValue={"Enter Your Password"}
        id={"password"}
        isRequired={"isRequired"}
        onChange={handlePasswordInput}
        // this part is only used for password
        inputRightElement={inputRightElement}
        handleClicked={handleClicked}
        show={show}
        //----------------------------------//
      />
      <LabelInput
        labelName={"Confirm Password"}
        placeHolderValue={"Enter Your confirm password"}
        id={"password"}
        isRequired={"isRequired"}
        onChange={handleConfirmPasswordInput}
        // this part is only used for password
        inputRightElement={inputRightElement}
        handleClicked={handleClicked}
        show={show}
        //----------------------------------//
      />
      <FileInput labelName={"Pic"} id={"pic"} onChange={handlePicInput} />
      <ButtonSimilar btnColor={"blue"} label={"Sign-up"} submitHandler={""} />
    </VStack>
  );
};

export default Signup;
