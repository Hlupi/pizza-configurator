import React from 'react'
import styled from 'styled-components'

const Legend = styled.legend`
    font-family: 'Sulphur Point', sans-serif;
    margin-bottom: ${({ special }) => !special && '20px'};
    text-align: ${({ special }) => !special && 'center'};
    font-weight: bold;
    font-size: ${({ special }) => special ? '16px' : '20px'}
`

const Fieldset = ({legend, special, children}) => {
    return (
        <fieldset>
            <Legend special={special}>{legend}</Legend>
            {children}
        </fieldset>
    )
}

export default Fieldset
