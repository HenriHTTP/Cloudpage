import React from 'react'

import{FaUser,FaUsers,FaUserFriends} from 'react-icons/fa'

import {
    Cards, 
    CardsButton, 
    CardsContainer, 
    CardsIcon, 
    CardsSubtitle, 
    CardsTitle,
    CardsButtonContainer,
    CardsTextContainer,
    SetCards,
    CardsIconsContainer
} from '../global/style'

function Card() {
    return (
        <> 
        <CardsContainer id="plan" >

            <SetCards>
            <Cards>
            <CardsTextContainer>
                <CardsIconsContainer><CardsIcon><FaUser/></CardsIcon></CardsIconsContainer>
                
               <CardsTitle>Starter</CardsTitle>
                <CardsSubtitle>Idea, research, target market, product/service development, marketing, launch, growth, success..</CardsSubtitle>
                </CardsTextContainer>
              
                <CardsButtonContainer>  <CardsButton>Buy</CardsButton> </CardsButtonContainer>
               
            </Cards>

            <Cards>
            <CardsTextContainer>
            
            <CardsIconsContainer><CardsIcon><FaUserFriends/></CardsIcon></CardsIconsContainer> 
              
               <CardsTitle>Business</CardsTitle>
                <CardsSubtitle>Vision, strategy, market analysis, financials, operations, marketing, implementation, success</CardsSubtitle>
                </CardsTextContainer>
              
                <CardsButtonContainer>  <CardsButton>Buy</CardsButton> </CardsButtonContainer>
               
            </Cards>

            <Cards>
            <CardsTextContainer>
          <CardsIconsContainer><CardsIcon><FaUsers/></CardsIcon> </CardsIconsContainer>
               <CardsTitle>Enterprise</CardsTitle>
                <CardsSubtitle> Vision, strategy, market analysis, competitive analysis, financial forecasting, organizational structure..</CardsSubtitle>
                </CardsTextContainer>
              
                <CardsButtonContainer>  <CardsButton>Buy</CardsButton> </CardsButtonContainer>
               
            </Cards>
            </SetCards>
        </CardsContainer>
        </>
    )
}
export default Card