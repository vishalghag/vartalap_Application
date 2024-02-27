import { VStack } from "@chakra-ui/react";
import LabelInput from "../common/LabelInput";
import { useState } from "react";
import ButtonSimilar from "../common/ButtonSimilar";

const Login = () => {
  const [show, setShow] = useState(false);
  const [inputRightElement, setInputRightElement] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleClicked = () => {
    setShow(!show);
  };

  console.log(email, "email", password);

  return (
    <VStack>
      <LabelInput
        labelName={"Email"}
        placeHolderValue={"Enter Your Email"}
        id={"email"}
        isRequired={"isRequired"}
        handleInput={handleEmailInput}
        inputValue={email}
      />
      <LabelInput
        labelName={"Password"}
        placeHolderValue={"Enter Your Password"}
        id={"password"}
        inputValue={password}
        isRequired={"isRequired"}
        handleInput={handlePasswordInput}
        // this part is only used for password
        inputRightElement={inputRightElement}
        handleClicked={handleClicked}
        show={show}
        //----------------------------------//
      />
      <ButtonSimilar btnColor={"blue"} label={"Sign-in"} submitHandler={""} />
      <ButtonSimilar
        btnColor={"red"}
        label={"Guest User Credentails"}
        submitHandler={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      />
    </VStack>
  );
};

export default Login;
