import React from 'react'
import Styled from './GridBox.style'

type Props = {children:React.ReactNode}

const GridBox = ({children}: Props) => {
  return (
    <Styled.GridBox>
        {children}
    </Styled.GridBox>
  )
}

export default GridBox