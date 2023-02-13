import React from 'react'
import Button from '../button/Button';
import { useDispatch } from "react-redux";
import { taskActions } from "../../store";
import Styled from './DeleteWarning.style';

type Props = {
    task: TodoItem
    popperCloseHandler?:()=>void
}

const DeleteWarning = ({task,popperCloseHandler}: Props) => {
    const dispatch = useDispatch()
  return (
    <Styled.WarningBox>
        <Styled.Title>Are you sure?</Styled.Title>
        <Styled.ButtonContainer>
        <Button title="Delete" onClick={() => {
          dispatch(taskActions.removeTask(task.id));
        }} danger={true}/>
        <Button title="Cancel" onClick={() => {
          if (popperCloseHandler) {
            popperCloseHandler();  
          }
        }}/>
        </Styled.ButtonContainer>
    </Styled.WarningBox>
  )
}

export default DeleteWarning