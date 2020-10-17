import React, { useEffect } from 'react'
import styled from 'styled-components';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'

gsap.registerPlugin(ScrollTrigger)

const images = require.context('../../images', true)
const imagePath = name => images(name, true)

        const HeroSpan = styled.span`
        font-size: ${props => props.isBig ? "4em" : "1.5em"};
        font-weight: ${props => props.isBig ? "800" : "200"};
        color: #E8E8E8;

        @media only screen and (max-width: 768px) {
              font-size: ${props => props.isBig ? "2em" : "0.8em"};
            }
        `
        const HeroSpanBig = styled.span`
        font-size: ${props => props.isBig ? "4em" : "1.5em"};
        font-weight: ${props => props.isBig ? "800" : "200"};
        color: #E8E8E8;
        position: relative;

          &::before{
            content: "";
            position: absolute;
            top: 10%;
            left: -2%;
            width: 0;
            height: 0;
            border-top: 150px solid #838383;
            border-right: 150px solid transparent;
            z-index: -1;

            @media only screen and (max-width: 768px) {
              border-top: 60px solid #838383;
              border-right: 60px solid transparent;
            }
          }
          &::after{
            content: "";
            position: absolute;
            bottom: 10%;
            right: -2%;
            width: 0;
            height: 0;
            border-bottom: 150px solid #DDCBC1;
            border-left: 150px solid transparent;
            z-index: -1;

            @media only screen and (max-width: 768px) {
              border-bottom: 60px solid #DDCBC1;
            border-left: 60px solid transparent;
            }
          }

            @media only screen and (max-width: 768px) {
              font-size: ${props => props.isBig ? "1.5em" : "0.5em"};
            }
        `

        const H1 = styled.h1`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;
        `

        const HeroWrapper = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;

            &::after{
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: rgba(0,0,0,0.8);
            }
        `

        const HeroIMG = styled.img`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
        `
        const Hero = styled.div`
        width: 100%;
        min-height: 100vh;
        padding: 10em 15em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
            
            @media only screen and (max-width: 768px) {
              padding: 10em 2em;
            }
      `

const themeAnimation = (dataAnimation, el) => {
  switch(dataAnimation){
    case '1':
      gsap.from(el,
        {y: '-100%', opacity: 0, duration: '0.8', ease: 'Power2.easeInOut' }
      )
      break;
    case '2':
      gsap.from(el,
        {y: '50%', opacity: 0, duration: '0.8', delay: '0.5', ease: 'Power4.easeInOut' }
      )
      break;
    case '3':
      gsap.from(el,
        {css:{scale: '1.2'}, opacity: 0, duration: '2', ease: 'Power2.easeOut' },)
      break;
  }
}

const HomeHero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.game');

    elements.forEach(el => {
      let dataAnimation = el.dataset.animation

      themeAnimation(dataAnimation, el)
    })
  })

  return(
    <Hero>
      <H1>
        <HeroSpan className='game' data-animation='1'>Studio projektowe</HeroSpan>
        <HeroSpanBig isBig className='game' data-animation='2'>BUILDERAL</HeroSpanBig>
      </H1>
      <HeroWrapper>
        <HeroIMG src={imagePath('./hero.jpg')} className='game' data-animation='3' />
      </HeroWrapper>
    </Hero>
  )
}

export default HomeHero;