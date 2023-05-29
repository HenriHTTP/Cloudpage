import React from 'react'

import{AiFillInstagram,AiFillFacebook,AiFillTwitterCircle} from 'react-icons/ai'

import { 
    Footer, 
    FooterContainer, 
    FooterIcons
} from '../global/style'

function Baseboard() {
    return (
       <>
       <FooterContainer id='contact'> 
        <Footer>

            <FooterIcons><AiFillInstagram/> Instagram</FooterIcons>
            <FooterIcons><AiFillFacebook/> Facebook</FooterIcons>
            <FooterIcons><AiFillTwitterCircle/> Twitter</FooterIcons>
        </Footer>   
       </FooterContainer>
       </>
    )
}
export default Baseboard