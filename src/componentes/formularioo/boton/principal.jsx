import styled from "styled-components"


const Bottons = styled.button`
    color: #fff;
    background-color: #76CD1A;
    border-radius: 4px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size:21px;
    font-weight:600;
    text-align:center;
    cursor: pointer;
    padding: .75rem 1.5rem;
    border: none;
    margin: 1rem 0 2rem;
    
    
`

const BottonP = ({titulo}) => {
 return <Bottons >{titulo}</Bottons>
     
}
export default BottonP