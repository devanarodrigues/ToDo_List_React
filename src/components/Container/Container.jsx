import styled from "styled-components"

const Container = ({ children }) => {

    const Box = styled.div`
    margin:auto;
    left: 3%;
    top: 15%;
    width:50vw;
    height:70vh;
    background-color: #070F2B;
    border-radius: .6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    box-shadow: 0 0 10px black;
    color: white;
    align-items: center;
    
    @media (max-width: 1200px){
        width:85%;
        position: absolute;
    }
`
    return (
        <Box>
            {children}
        </Box>
    )
}

export default Container