import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const Label = styled.label`
  margin-left: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 30px);
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -25px;
    width: 16px;
    height: 16px;
    border-width: 2px;
    border-style: solid;
    border-color: #0B0A08;
    border-radius: ${({ radio }) => radio ? '50%' : '5px'};
    transition: border-color 0.25s linear;
  }

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: ${({ tick }) => tick ? '-22px' : '-21px'};
    width: ${({ tick }) => tick ? '10px' : '8px'};
    height: ${({ tick }) => tick ? '10px' : '8px'};
    border-radius: ${({ radio }) => radio ? '50%' : '2px'};
    transition: background 0.25s linear;
    }
`

const Input = styled.input`
  opacity: 0;
  &:checked + ${Label}::after {
    background: #feaf7b;
    ${({ tick }) => tick && css`
      background-image: url(img/check.svg);
      background-repeat: no-repeat;
      background-position: center;
    `};
  }

  &:checked + ${Label}::before {
    border-color: #feaf7b;
  }

  &:focus + ${Label}::before {
    box-shadow: 0 0px 8px #feaf7b;
  }
`

const Select = props => {
  const { type, price, value, onChange, name, label, tick } = props
  const radio = type === 'radio'
  return (
    <Wrapper>
      <Input type={type} value={value} onChange={onChange} name={name} id={value} tick={tick} />
      <Label htmlFor={value} radio={radio}>{label} <span>{price}</span></Label>
    </Wrapper>
  )
}

export default Select
