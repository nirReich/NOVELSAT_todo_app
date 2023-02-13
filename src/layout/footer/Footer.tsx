import React from 'react'
import Styled from './Footer.style'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import appUtils from '../../utils';

type Props = {}

const Footer = (props: Props) => {
  return (
    <Styled.FooterBody>
        <Styled.FooterContainer>
            this site created by:
            <Styled.NameLabel>Nir Reich</Styled.NameLabel>
        </Styled.FooterContainer>
        <Styled.FooterContainer>
            <LinkedInIcon/> <Styled.FooterLink href="https://www.linkedin.com/in/nir-reich/">{appUtils.linkedinLink}</Styled.FooterLink>
        </Styled.FooterContainer>
        <Styled.FooterContainer>
            <MailOutlineIcon/> <Styled.FooterLink href="mailto:reich.nir@gmail.com">{appUtils.emailLink}</Styled.FooterLink>
        </Styled.FooterContainer>
    </Styled.FooterBody>
  )
}

export default Footer