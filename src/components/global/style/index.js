import styled from "styled-components";
import { keyframes } from "styled-components";



//animations
const Puch = keyframes`
    from{position:relative; left: 100px;} 
    to {position:relative; left:0px;}
`
const zoom = keyframes`
    from{transform: scale(0.7);}
    to {transform: scale(1.0);}
`


//menu componeponents

export const Menu = styled.nav `
    width: 100%;
    position: ${props => (props.isFixed)};
    height: 75px;
    display: flex;
    justify-content: center;
    background: white;
    border-bottom: ${props => (props.isBorder)};;
`
export const MenuFixed = styled.nav `
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    background: white;
    position: fixed;
`
export const MenuSetLink = styled.ul `
    list-style: none;
    text-decoration: none;
    margin: auto;
    display: flex;
    justify-content: space-around;
    width:600px;

`
export const  MenuLink = styled.li `
    list-style: none;
    text-decoration: none;
    color:gray;
    font-size: 1em;
    &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

`
export const MenuContainer = styled.ul `
    list-style: none;
    text-decoration: none;
    margin: auto;
    display: flex;
    justify-content: space-around;
    width:100%;
`
export const  MenuLogo = styled.h1 `
    color:gray;
    font-size: 2em;
    color:#4a2d7d; 
    margin: auto;

`
export const  MenuButton = styled.button `
    width: 150px;
    border-radius: 20px;    
    padding: 10px;
    color:#0078ff;
    border: solid 1px #0078ff;
    margin: auto;
    text-align: center;
    background: white;  
    &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

`


//seach componeponents

export const SeachContainer = styled.div `
    width: 900px;
    background:white;
    height: 40px;
    margin: auto;
    display: flex;
    border:1px solid #000;
    border-radius: 10px;
    justify-content: space-around;
`
export const SeachInput = styled.input `
    width:800px;
    padding:10px;
    background:white;
    border: none;
    outline : none;
    margin: auto;
`

export const SeachButton = styled.button `
    display: flex;
    justify-content: center;
    font-size: 1.5em;
    border: none;
    text-align: center;
    margin: auto;
    width: 50px;
    background: white;
`
//carousel componeponents

export const  CarouselMain = styled.div `
    width: 800px;
    height:800px; 
    margin: auto;
    border-radius: 20px;
`
export const  CarouselBanner = styled.img `
    width: 700px;
    height:700px; 
    margin: auto;
    border-radius: 20px;
    animation: ${zoom} ;
    animation-duration: 1s;
`
export const  CarouselBannerContainer = styled.div `
    width: 800px;
    height:800px; 
    margin: auto;
`
export const  CarouselCard = styled.div `
  width: 400px;
  height: 200px;
  margin: auto;
  background: #1e1c4d;
  position: relative;
  top: -200px;
  left: -300px;
  border-radius: 20px;
`
export const  CarouselCardText= styled.p `
    color: white;
    font-size: 1em;
    padding: 20px;
    text-align: left;   
    width:300px;
`
export const  CarouselCardTitle= styled.h1 `
    color: white;
    font-size: 0.8em;
    padding: 20px;
    padding-bottom: 5px;
    text-align: left;   
    font-weight: bold;
`
export const  CarouselCardSubtitle= styled.h2 `
    color: gray;
    font-size: 0.9em;
    padding: 0px;
    padding-left: 20px;
    text-align: left;   
    font-weight: normal;
`

export const CarouselContainer =  styled.div `
    width: 100%;
    display:flex; 
    justify-content: space-around;
    margin: auto;
    background: white;
    height: 1000px;

`                    
//advertisements componeponents           

export const Advertisements = styled.div `
    width: 600px;
    height:350px;
`
export const  AdvertisementsButton = styled.button `
    width: 200px;
    border-radius: 20px;
    padding: 20px;
    color:#ffff;  
    background: #4a2d7d;
    margin: auto;
    text-align: center;
    border: none;
    font-size: 1.2em;
    margin-bottom: 20px;
     animation: ${Puch} ;
    animation-duration: 1s;
    &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

`
export const  AdvertisementsButtonContainer = styled.div `
    height:250px;
    padding: 20px;
    margin-top: 50px;

`
export const  AdvertisementsButtonText = styled.p `
   color:gray;
   text-align: left;
   font-size: 1em;
   padding: 10px;
   padding-bottom: 5px;
   margin: auto;
`


export const  AdvertisementsTitle = styled.h1 `
    border-radius: 20px;
    padding: 20px;
    color:#4a2d7d;  
    margin: auto;
    text-align: center;
    border: none;
    font-size: 3em;
    font-weight: bold;

`
export const  AdvertisementsSubtitle = styled.p `
    border-radius: 20px;
    padding: 20px;
    color:gray;  
    margin: auto;
    text-align: left;
    border: none;
    font-size: 1.2em;

`
export const AdvertisementsContainer = styled.div `
    display: flex;
    padding: 20px;
    justify-content: space-around;
    flex-direction: column;
    height: 700px;
    margin: auto;
`

// cards componeponents

export const CardsContainer = styled.div ` 
    margin: auto;
    height: 600px;
    width: 100%;
    justify-content:center;
    display: flex;  
    background: white;
`
export const SetCards = styled.div ` 
    margin: auto;
    height: 700px;
    width: 1000px;
    display: flex;
    justify-content: space-around;
`
export const Cards = styled.div `
    width: 300px;
    background: white;
    margin: auto;
    height: 500px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding:0px;
`
export const CardsTitle = styled.h1 `
    color:#4a2d7d;
    font-size: 2em;
    text-align: center;
    font-weight: bold;
    padding: 20px;
`
export const CardsSubtitle = styled.h2 `
    color:gray;
    font-size: 1em;
    padding: 20px;
    font-weight: normal;
    text-align: center;
`
export const CardsIcon = styled.h3 `
    color:#ffff;
    font-size: 3em;
    padding: 20px;
    font-weight: normal;
    margin: auto;
`
export const CardsIconsContainer = styled.div`
    background:#724ea9; 
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    margin: auto;
    &:hover {
    opacity: 0.7;
    cursor: pointer;
    transform: scale(0.9);
  }
`

export const CardsButton = styled.button `
    margin: auto;
    color:#4a2d7d;
    text-align: center;
    font-size: 1em;
    background-color: #ffff;
    border: none;   
    display: flex;
    justify-content: center;
    &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

export const CardsButtonContainer = styled.div `
    margin: auto;
`
export const CardsTextContainer = styled.div `
    margin: auto;
`
// Description componeponents  

export const DescriptionContainer = styled.div `
    width: 100%;
    background: #ffff;
    display: flex;
    justify-content: center;
    height: 800px;
`
export const TablePlan = styled.table `
    width: 800px;
    margin: auto;
    box-shadow: 10px 10px 114px 0px rgba(196,196,196,1);`

export const TrPlan = styled.tr `
    background: #ffff;
`
export const ThPlan = styled.th `
    background: #ffff;
    color:gray;
    font-size: 1em; 
    font-weight: normal;
    border: none;
    padding: 20px;
    border-radius: 20px;
    cursor: pointer;
   
`
export const ThPlanTitle = styled.th `
    background: #fff;
    color:#4a2d7d;
    font-size: 2em; 
    font-weight: normal;
    border: none;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
`
export const DescriptionImage = styled.img `
    width: 600px;
    height: 600px;
`
export const SetImage = styled.div `
    width: 600px;
    height: 600px;
    margin: auto;
`
// Footer componeponents

export const FooterContainer = styled.div `
    width: 100%;
    background:linear-gradient(0deg, 30% #f5f5f5 , 70% #ffff);
    display: flex;
    justify-content: center;
    height: 300px;
`
export const Footer = styled.div `
    width: 600px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    font-size: 1em;
`
export const FooterIcons= styled.h1 `
    font-size: 1.2em;
    font-weight: normal;
    cursor: pointer;
`