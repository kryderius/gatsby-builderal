import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'

gsap.registerPlugin(ScrollTrigger)

const images = require.context('../../images', true)
const imagePath = name => images(name, true)

const StyledWrapper = styled.div`
    position: relative;
    margin: 0em 15em;
    min-height: 200vh;
`

const ImgWrapper = styled.div`
    position: absolute;
    top: ${props => props.isRight ? "15vw" : "5vw"};
    left: ${props => props.isRight ? "null" : "0"};
    right: ${props => props.isRight ? "0" : "null"};
    width: 35vw;
    height: 20vw;
    overflow: hidden;
`

const PortfolioIMG = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 120%;
`

const ImgWrapperSecond = styled.div`
    position: absolute;
    top: ${props => props.isRight ? "40vw" : "30vw"};
    left: ${props => props.isRight ? "null" : "0"};
    right: ${props => props.isRight ? "0" : "null"};
    width: ${props => props.isRight ? "40vw" : "50vw"};
    height: ${props => props.isRight ? "25vw" : "40vw"};
    overflow: hidden;
`

const PortfolioIMGSecond = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 120%;
`
const PortfolioSquare = styled.span`
    position: absolute;
    top: 40vw;
    left: 40vw;
    transform: translate(-50%, -50%);
    width: 15vw;
    height: 15vw;
    background: #303030;
`


function Portfolio() {
    let image1 = useRef();
    let image2 = useRef();
    let image3 = useRef();
    let image4 = useRef();
    
    useEffect(() => {

        const images = [
            image1.current,
            image2.current,
          ];
        
        const images2 = [
            image3.current,
            image4.current

        ];
        gsap.to(images, { y: '-20%', scrollTrigger:{
            trigger: images,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }})
        gsap.to(images2, { y: '-20%', scrollTrigger:{
            trigger: images2,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }})
    })

  return(
    <StyledWrapper>
        <PortfolioSquare></PortfolioSquare>
            <ImgWrapper>
                <PortfolioIMG src={imagePath('./section1-2.jpg')} ref={image1}/>
            </ImgWrapper>
            <ImgWrapper isRight>
                <PortfolioIMG src={imagePath('./section1-3.jpg')} ref={image2} />
            </ImgWrapper>
            <ImgWrapperSecond>
                <PortfolioIMGSecond src={imagePath('./section1-4.jpg')} ref={image3} />
            </ImgWrapperSecond>
            <ImgWrapperSecond isRight>
                <PortfolioIMGSecond src={imagePath('./section1-5.jpg')} ref={image4} />
            </ImgWrapperSecond>
    </StyledWrapper>
  )
}

export default Portfolio;