import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  &::after {
    margin-left: auto;
    content: attr(data-price);
  }

`

const InputField = styled.input`
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
    border: 2px solid #feaf7b;
    border-radius: ${({ radio }) => radio ? '50%' : '5px'};
  }
  &:checked::after {
    content: '';
    visibility: visible;
    display: inline-block;
    position: absolute;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    background: #feaf7b;
    border-radius: ${({ radio }) => radio ? '50%' : '2px'};
  }
`

const Input = props => {
    const { type, price, value, onChange, name, label } = props
    const radio = type === 'radio'
    return (
        <Label data-price={price}>
            <InputField type={type} value={value} onChange={onChange} name={name} radio={radio} />
            {label}
        </Label>
    )
}

export default Input
