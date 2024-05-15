import styled from 'styled-components'

const Box = styled.div`
    width: 80%;
    height: 90%;
    background-color: #9290C3;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin: auto;
    padding: 1rem 0;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 0;
    }

    @media (max-width:1200px){
        width: 100%;
    }
`

const ContainerLista = ({ children }) => {
    return (
        <Box>{children}</Box>
    )
}

export default ContainerLista