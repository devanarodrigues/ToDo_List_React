import { useContext, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { IoCheckmarkSharp } from 'react-icons/io5'
import styled from 'styled-components'
import LocalStorageItens from '../../contexts/LocalStorageContext'
import { Fade } from 'react-awesome-reveal'

function Item({ text }) {
    const [checked, setChecked] = useState(false)
    const { itens, setItens } = useContext(LocalStorageItens)

    const Box = styled.div`
    width: 90%;
    background-color: #535C91;
    border-radius: .5rem;
    text-align: left;
    padding: .5rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: all .3s ease-in-out;
    opacity: ${checked ? '.5' : '1'};
    @media (max-width:1200px){
        width: 80%;
    }

    .text{
    text-decoration: ${checked ? "line-through" : "none"};
    font-style: ${checked ? "italic" : "normal"};
    }
`
    const Delete = styled.button`
    border: none;
    &:hover{
        border: none;
    }
    `
    const Check = styled.button`
    border: none;
    margin-left: .5rem;
    &:hover{
    border: none;
    }
`
    function deletar(e) {
        let aux = itens.filter((item) => item !== e)
        setItens(aux)
    }

    return (
        <Fade style={{ width: "100%", marginLeft: "2.5rem" }} damping={1}>
            <Box>
                <p className='text'>{text}</p>
                <div>
                    {
                        checked || itens.length === 1 ?
                            <Delete disabled ><AiOutlineDelete /></Delete>
                            : <Delete onClick={() => deletar(text)}><AiOutlineDelete style={{ color: 'red' }} /></Delete>
                    }
                    <Check onClick={() => setChecked(!checked)}><IoCheckmarkSharp style={{ color: 'green' }} /></Check>
                </div>
            </Box>
        </Fade>
    )
}

export default Item