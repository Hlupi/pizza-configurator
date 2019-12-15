import React, { useState, useRef } from 'react'
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
  margin-bottom: 20px;
  padding: 40px;
  & > svg {
    display: block;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    margin-left: auto;
    margin-right: auto;
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
  const slider = useRef()

  const slideLeft = () => {
    setActive(active - 1)
    setTranslate(translate + 100)
  }

  const slideRight = () => {
    setActive(active + 1)
    setTranslate(translate - 100)
  }

  const children = [<Base />, <Sauce />, <Toppings />, <Price />]
  const numOfchildren = children.length
  const renderCards = children.map((child, i) => {
    return (
      <Slide key={i} step={i + 1} active={active === i}>
        <Card>{child}</Card>
      </Slide>
    )
  })

  return (
    <Container>
      <h1>Mix and match and then you buy</h1>
      <Pizza size={size * 10} toppings={toppings} />
      <Wrapper>
        {active > 0 && (
          <Button onClick={slideLeft} style={{ left: 0 }}>
            <Left />
          </Button>
        )}
        <Slider style={{ transform: `translateX(${translate}%)` }} ref={slider}>
          {renderCards}
        </Slider>
        {active < numOfchildren - 1 && (
          <Button onClick={slideRight} style={{ right: 0 }}>
            <Right />
          </Button>
        )}
      </Wrapper>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    size: state.pizza.base && state.pizza.base.slice(0, 2),
    toppings: state.pizza.topping
  }
}

export default connect(mapStateToProps)(PizzaContainer)
