import React from 'react';
import Styled from './PopperButton.style';


type Props = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    popperCloseHandler:()=>void
}

const PopperBox = ({children,popperCloseHandler}: Props) => {
  return (
    <Styled.PopperBox>
      {React.cloneElement(children, {popperCloseHandler: popperCloseHandler})}
    </Styled.PopperBox>
  )
}

export default PopperBox