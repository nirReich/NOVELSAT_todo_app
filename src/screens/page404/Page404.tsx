
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Styled from './Page404.style'


type Props = {}

const Page404 = (props: Props) => {
  return (
    <div>
      <Styled.Title>Oops!</Styled.Title>
      <Styled.SubTitle>404- Page not found</Styled.SubTitle>
      <Styled.DescriptionP> The page you’re looking for doesn’t exist.</Styled.DescriptionP>
    <Link to={"/"}><Button title='Back to homepage'/></Link>
    </div>
  )
}

export default Page404