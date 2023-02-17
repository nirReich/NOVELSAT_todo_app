import React, { useState, useReducer } from "react";
import { taskActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import Styled from "./Form.style";
import TextField from "@mui/material/TextField";
import appUtils from "../../utils";

type Action = {
  type: "title" | "description";
  payload: any;
};

type ErrorData = {
  type: "title" | "description" | "noError";
  massage: string;
};

const initialState: TodoItem = {
  title: "",
  description: "",
  id: "",
  finished: false,
};

function formReducer(state: TodoItem, action: Action) {
  let newState = { ...state };
  switch (action.type) {
    case "title":
      newState.title = action.payload;
      return newState;
    case "description":
      newState.description = action.payload;
      return newState;
    default:
      throw new Error("unknown action");
  }
}

const Form = () => {
  const [formError, setFormError] = useState<ErrorData>({
    type: "noError",
    massage: "Please enter task title and description",
  });
  const [state, formDispatch] = useReducer(formReducer, initialState);
  const dispatch = useDispatch();

  const handleStateDispatch = (state: TodoItem) => {
    if (state.title.length < 2) {
      setFormError({
        type: "title",
        massage: "Title invalid! Title must be longer than 2 letters",
      });
    } else if (state.title.length > 10) {
      setFormError({
        type: "title",
        massage: "Title invalid! Title must be shorter than 10 letters",
      });
    } else if (!appUtils.checkTwoWordsAndLongerThanFour(state.description)) {
      setFormError({
        type: "description",
        massage:
          "Task description must be longer than 4 letters and contain at least two words",
      });
    } else {
      dispatch(taskActions.addTask(state));
      dispatch(taskActions.OpenModal(false));
    }
  };

  return (
    <Styled.Form>
      <Styled.FormTitle>Create new task</Styled.FormTitle>
      <Styled.FormInstructions isError={formError.type !== "noError"}>
        {formError.massage}
      </Styled.FormInstructions>
      <Styled.FormSection>
        <p>Task title:</p>
        <TextField
          name="title"
          error={formError.type === "title"}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={Styled.FormInput}
          onChange={(e) =>
            formDispatch({ type: "title", payload: e.target.value.toString() })
          }
        />
      </Styled.FormSection>
      <Styled.FormSection>
        <p>Description:</p>
        <TextField
          name="description"
          error={formError.type === "description"}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          sx={Styled.FormInput}
          onChange={(e) =>
            formDispatch({
              type: "description",
              payload: e.target.value.toString(),
            })
          }
        />
      </Styled.FormSection>

      <Styled.FormButton
        onClick={() => {
          handleStateDispatch(state);
        }}
      >
        Submit
      </Styled.FormButton>
    </Styled.Form>
  );
};

export default Form;
