import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'gatsby'

gsap.registerPlugin(ScrollTrigger)

const images = require.context('../../images', true)
const imagePath = name => images(name, true)

const StyledWrapper = styled.div`
    position: relative;
    margin: 0em 15em;
    padding: 15em 0em;
    min-height: 80vw;

    @media only screen and (max-width: 768px) {
              margin: 0em 2em;
              padding: 5em 0em;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              min-height: auto;
            }
`

const ImgWrapper = styled.div`
    position: absolute;
    top: ${props => props.isRight ? "20vw" : "10vw"};
    left: ${props => props.isRight ? "null" : "0"};
    right: ${props => props.isRight ? "0" : "null"};
    width: 35vw;
    height: 20vw;
    overflow: hidden;
    z-index: 8;
        @media only screen and (max-width: 768px) {
              position: static;
              width: 70vw;
              height: 40vw;
              margin-left: ${props => props.isRight ? "null" : "8em"};
              margin-right: ${props => props.isRight ? "8em" : "null"};
              margin-bottom: 3em;
            }
`

const PortfolioIMG = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 120%;
    z-index: 8;
        @media only screen and (max-width: 768px) {
              position: static;
            }
`

const ImgWrapperSecond = styled.div`
    position: absolute;
    top: ${props => props.isRight ? "45vw" : "35vw"};
    left: ${props => props.isRight ? "null" : "0"};
    right: ${props => props.isRight ? "0" : "null"};
    width: ${props => props.isRight ? "40vw" : "50vw"};
    height: ${props => props.isRight ? "25vw" : "30vw"};
    overflow: hidden;
        @media only screen and (max-width: 768px) {
              position: static;
              width: ${props => props.isRight ? "70vw" : "70vw"};
              height: ${props => props.isRight ? "40vw" : "75vw"};
              margin-left: ${props => props.isRight ? "null" : "30%"};
              margin-right: ${props => props.isRight ? "30%" : "null"};
              margin-bottom: ${props => props.isRight ? "3em" : "3em"};
            }
`

const PortfolioIMGSecond = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 120%;
    @media only screen and (max-width: 768px) {
              position: static;
            }
`
const PortfolioSquare = styled.span`
    position: absolute;
    top: 40vw;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15vw;
    height: 15vw;
    background: #303030;
    @media only screen and (max-width: 768px) {
              left: 80%;
              width: 30vw;
              height: 30vw;
              top: 95vw;
            }
    
`
const Button = styled.button`
    font-family: "Nunito Sans", sans-serif;
    position: absolute;
    bottom: 0;
    left: 50%;
    border: none;
    border-radius: 10px;
    background-color: #F0DED4;
    width: 20em;
    height: 5em;
    transform: translateX(-50%);
    transition: box-shadow 0.3s ease-out;

        &:hover{
            box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.5);

            a{
                color: #838383;
            }
        }

    @media only screen and (max-width: 768px) {
            width: 15em;
            height: 4em;
        }
    

    a{
        text-decoration: none;
        font-size: 1.5em;
        color: #303030;
        width: 100%;
        height: 100%;
        display: flex;
    justify-content: center;
    align-items: center;
    transition: color 0.3s ease-out;

    @media only screen and (max-width: 768px) {
            font-size: 1.5em;
            }
    }
`

const H1Wrapper = styled.div`
    position: absolute;
    top: 6vw;
    right: 0;
        @media only screen and (max-width: 768px) {
            right: unset;
            left: 0;
            }
`

const MainH1 = styled.h1`
    font-size: 8em;
    color: #DDCBC1;
    font-weight: 800;
        @media only screen and (max-width: 768px) {
            font-size: 3.5em;
            }
`
const MainH1Span = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 8em;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #DDCBC1;
    font-weight: 800;
    z-index: 10;
    @media only screen and (max-width: 768px) {
            font-size: 3.5em;
            -webkit-text-stroke-width: 1px;
            }
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
            start: "top center",
            end: "bottom top",
            scrub: true,
        }})
        gsap.to(images2, { y: '-20%', scrollTrigger:{
            trigger: images2,
            start: "top center",
            end: "bottom top",
            scrub: true,
        }})
    })

  return(
    <StyledWrapper>
        <H1Wrapper>
            <MainH1>Nasze projekty</MainH1>
            <MainH1Span>Nasze projekty</MainH1Span>
        </H1Wrapper>
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
            <Button><Link to="/realizacje">Zobacz wszystkie</Link></Button>
    </StyledWrapper>
  )
}

export default Portfolio;