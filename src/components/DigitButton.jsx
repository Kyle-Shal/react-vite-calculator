import { ACTIONS } from "../App.jsx";
import { Button, ChakraProvider } from "@chakra-ui/react";

export default function DigitButton({ dispatch, digit }) {
  return (
    <Button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </Button>
  );
}
