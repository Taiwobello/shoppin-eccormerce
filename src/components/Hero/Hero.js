import React from 'react'
import { toggleCategory } from '../../redux/shop/shopActions'
import { useDispatch } from 'react-redux'
import { HeroImage, HeroText, HeroTextContainer, HeroTitle, HeroTitleTwo, HeroContainer, ButtonLink } from './Hero.styles'

function Hero() {
    const dispatch = useDispatch()
    return (
        <HeroContainer>
            <div className="container">
                <HeroTextContainer>
                    <HeroTitle>Catch your own</HeroTitle>
                    <HeroTitleTwo>Stylish and Look</HeroTitleTwo>
                    <HeroText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. </HeroText>
                    <ButtonLink to={"/shop"} onClick={() => dispatch(toggleCategory("all"))} >Shop Now</ButtonLink>
                </HeroTextContainer>
                <HeroImage src="images/jon-ly-Xn7GvimQrk8-unsplash (1).jpg" />
            </div>
        </HeroContainer>
        
    )
}

export default Hero
