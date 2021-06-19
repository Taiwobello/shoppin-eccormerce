import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { HomePageContainer, HomePageHero } from './HomePage.styles'
import Hero from '../../components/Hero/Hero'
import Categories from '../../components/Categories/Categories'
import { Container } from '../../App.styles'
import WishList from '../../components/WishListItems/WishListItems'

function HomePage(props) {
    return (
        <HomePageContainer>
            <div className="hero-background">
                <Container>
                    <HomePageHero>
                        <NavBar />
                        <Hero />
                    </HomePageHero>
                </Container>
            </div>
            <Categories />
            <WishList />
        </HomePageContainer>
    )
}

export default HomePage
