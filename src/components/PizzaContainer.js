import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Pizza from './Pizza'
import Base from './Base'
import Sauce from './Sauce'
import Toppings from './Toppings'
import Price from './Price'
import Left from './fragments/left'
import Right from './fragments/right'

const Container = styled.section`
  padding: 20px;
  & > svg {
    display: block;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    padding: 40px;
    margin: 40px auto;
    max-width: 640px;
    border-radius: 5px;
    box-shadow: 10px 10px 20px #614030;
  }
`

const Wrapper = styled.div`
  margin-top: 40px;
  overflow-x: hidden;
  position: relative;
`

const Button = styled.button`
  padding: 0;
  position: absolute;
  top: 150px;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #fff;
  opacity: 0.7;
  z-index: 1;
  transition: opacity 0.25s linear;
  &:hover {
    opacity: 1;
  }

  & > svg {
    ${({ disabled }) => disabled && 'fill: #cfcfcf'};
    width: 30%;
  }
`

const Slider = styled.div`
  display: flex;
  transition: transform 0.25s linear;
`

const Slide = styled.div`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;

  &::before {
    content: attr(step);
    margin: 0 auto 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ active }) => (active ? '#feaf7b' : '#EFEFEF')};
  }
`

const Card = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  background: #efefef;
  border-radius: 20px;
  width: 80%;
  @media (min-width: 640px) {
    width: 50%;
  }
`


const PizzaContainer = ({ size, toppings }) => {
  const [active, setActive] = useState(0)
  const [translate, setTranslate] = useState(0)

  const slideLeft = () => {
    setActive(active - 1)
    setTranslate(translate + 100)
  }

  const slideRight = () => {
    setActive(active + 1)
    setTranslate(translate - 100)
  }

  const arrowControls = e => {
    if (e.keyCode === 39 && maySlideRight) {
      e.preventDefault()
      slideRight()
    }
    if (e.keyCode === 37 && maySlideLeft) {
      e.preventDefault()
      slideLeft()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', arrowControls)
    return () => {
      window.removeEventListener('keydown', arrowControls)
    }
  })

  const children = [<Base />, <Sauce />, <Toppings />, <Price />]
  const numOfchildren = children.length
  const maySlideRight = active < numOfchildren - 1
  const maySlideLeft = active > 0
  const renderCards = children.map((child, i) => {
    const activeSlide = active === i
    return (
      <Slide key={i} step={i + 1} active={activeSlide}>
        <Card>{React.cloneElement(
          child,
          { active: activeSlide }
        )}</Card>
      </Slide>
    )
  })

  return (
    <Container pizzaSize={size}>
      <header>
        <h1>Mix and match and then you buy</h1>
      </header>
      <Pizza size={size * 10} toppings={toppings.map(t=> t.name)} />
      <Wrapper>
        {maySlideLeft && (
          <Button onClick={slideLeft} style={{ left: 0 }}>
            <Left />
          </Button>
        )}
        <Slider style={{ transform: `translateX(${translate}%)` }}>
          {renderCards}
        </Slider>
        {maySlideRight && (
          <Button onClick={slideRight} style={{ right: 0 }} disabled={!size}>
            <Right />
          </Button>
        )}
      </Wrapper>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    size: state.base && state.base.name.slice(0, 2),
    toppings: state.toppings
  }
}

export default connect(mapStateToProps)(PizzaContainer)
