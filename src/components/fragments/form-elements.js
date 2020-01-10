import styled from 'styled-components'

export const Fieldset = styled.fieldset`
    margin: 0;
    padding: 0;
    border: none;
`
export const Legend = styled.legend`
font-family: 'Sulphur Point', sans-serif;
    margin-bottom: ${({ special }) => !special && '20px'};
    text-align: ${({ special }) => !special && 'center'};
    font-weight: bold;
    font-size: ${({ special }) => special ? '16px' : '20px'}
` 
