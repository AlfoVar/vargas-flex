import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Img = styled.img`
    margin-top:20px;
`


const Footer = () => {
    return <Box
    sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        justifyContent: "Center",
        borderTop: "2px solid #76CD1A",
        paddingBottom: "1.25rem",
    }}
    >
    <Link to="/"><Img src="https://fontmeme.com/permalink/240716/fa7e3c0d852afca26b06d4459447eb81.png" alt="LOGO"/></Link>
    
    </Box>
}

export default Footer