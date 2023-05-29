import React, { useContext ,useEffect,useState} from 'react'


import {
    Menu,
    MenuSetLink,
    MenuLink,
    CarouselContainer,
    Advertisements,
    AdvertisementsContainer,
    CarouselMain,
    AdvertisementsButton,
    AdvertisementsTitle,
    AdvertisementsSubtitle,
    CarouselBanner,
    CarouselBannerContainer,
    MenuContainer,
    MenuLogo,
    AdvertisementsButtonContainer,
    AdvertisementsButtonText,
    MenuButton,
  } from '../global/style';


import {BsGraphUpArrow,BsFillCheckCircleFill } from 'react-icons/bs'

import CarContext from '../../context/Context'


import Banner from './img/cloud.png'

import { Link } from 'react-scroll';



function NavBar(){ 

    const [menuclass,setmenuclass]= useState('relative')
    const [border,setborder]= useState('none')

    const handleScroll = () => { 
        window.scrollY >= 1 ? setmenuclass('fixed') :setmenuclass('relative')
        window.scrollY >= 1 ? setborder('1px solid gray') :setborder('none')
        }
   
    useEffect(() => {
    // Utilizando useEffect para adicionar o listener de scroll ao carregar o componente
    window.addEventListener('scroll', handleScroll);

    // Utilizando useEffect para remover o listener de scroll ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, [])

    // função  para mudar classe de compenente nav
    
 



    const {user,setuser} = useContext(CarContext)
    console.log(user)


    return( 
        <>     
        <Menu isFixed={menuclass} isBorder={border}>
            
            <MenuContainer> 
                
                <MenuLogo><BsGraphUpArrow/></MenuLogo> 
            
                <MenuSetLink>
                
                <MenuLink><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></MenuLink>
                <MenuLink><Link activeClass="active" to="plan" spy={true} smooth={true} offset={50} duration={500}>Plan</Link></MenuLink>
                <MenuLink><Link activeClass="active" to="suport" spy={true} smooth={true} offset={50} duration={500}>Suport</Link></MenuLink>
                <MenuLink><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></MenuLink>
            
                 </MenuSetLink>
                 <MenuButton>Get start</MenuButton>
            </MenuContainer>
           
        </Menu>
        <CarouselContainer id="home"> 
            <AdvertisementsContainer> 
            <Advertisements> 
                     <AdvertisementsTitle>
                     Empowering Your Data's Journey to the Cloud
                     </AdvertisementsTitle>

                    <AdvertisementsSubtitle> 
                    Unlock the power of cloud storage and take your business to new heights. Our cutting-edge solution offers secure, scalable, and accessible storage for all your valuable data. Embrace the future of storage technology and revolutionize the way you store, manage, and protect your information.
                    </AdvertisementsSubtitle>
                
             </Advertisements>
                <Advertisements> 
                    <AdvertisementsButtonContainer>
                         <AdvertisementsButton>Get Start</AdvertisementsButton>
                         
                         <AdvertisementsButtonText> <BsFillCheckCircleFill/> 100% remote</AdvertisementsButtonText>
                         
                         <AdvertisementsButtonText> <BsFillCheckCircleFill/> full support </AdvertisementsButtonText>
                         
                         <AdvertisementsButtonText> <BsFillCheckCircleFill/> full supportSecurity of your data </AdvertisementsButtonText>

                    </AdvertisementsButtonContainer>
                    
                </Advertisements>
            </AdvertisementsContainer>
            
            
            <CarouselMain> 
            <CarouselBannerContainer>
            <CarouselBanner alt='img' src={Banner}/>
            </CarouselBannerContainer>
            </CarouselMain>
        </CarouselContainer>
        </>
  
    )
}

export default NavBar