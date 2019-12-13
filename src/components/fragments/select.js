import React from 'react'
import styled, { css } from 'styled-components'

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  &::after {
    margin-left: auto;
    content: attr(data-price);
  }

`

const Input = styled.input`
  visibility: hidden;
  position: relative;
  margin-right: 10px;
  &::before {
    content: '';
    visibility: visible;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    border-width: 2px;
    border-style: solid;
    border-color: #0B0A08;
    border-radius: ${({ radio }) => radio ? '50%' : '5px'};
    transition: border-color 0.25s linear ;
  }
  &::after {
    content: '';
    visibility: visible;
    display: inline-block;
    position: absolute;
    top: ${({ tick }) => tick ? '3px' : '4px'};
    left: ${({ tick }) => tick ? '3px' : '4px'};
    width: ${({ tick }) => tick ? '10px' : '8px'};
    height: ${({ tick }) => tick ? '10px' : '8px'};
    border-radius: ${({ radio }) => radio ? '50%' : '2px'};
    transition: background 0.25s linear ;
  }

  &:checked::before {
    border-color: #feaf7b;
  }

  &:checked::after {
    background: #feaf7b;
    ${({ tick }) => tick && css`
      background-image: url(img/check.svg);
      background-repeat: no-repeat;
      background-position: center;
    `};
  }
`

const Select = props => {
    const { type, price, value, onChange, name, label, tick } = props
    const radio = type === 'radio'
    return (
        <Label data-price={price}>
            <Input type={type} value={value} onChange={onChange} name={name} radio={radio} tick={tick} />
            {label}
        </Label>
    )
}

export default Select
