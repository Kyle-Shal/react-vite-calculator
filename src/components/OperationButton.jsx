import { ACTIONS } from "../App.jsx";
import { Button } from "@chakra-ui/react";

export default function DigitButton({ dispatch, operation }) {
  return (
    <Button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </Button>
  );
}
