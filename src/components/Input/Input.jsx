import { useContext, useState } from 'react'
import styled from 'styled-components'
import LocalStorageItens from '../../contexts/LocalStorageContext'

const StyledInput = styled.input`
width: 100%;
padding: .7rem 1rem;
border-radius: .3rem;
outline: none;
border: none;

&:focus {
    outline: none;
    border: none;
}
`
const StyledButton = styled.button`
width: 7rem;
text-align: center;
padding: .5rem 1rem;
font-size: .9rem;
`
const Box = styled.div`
width: 50%;
gap: .5rem;
display: flex;
justify-content: flex-start;
flex-direction: row;

@media (max-width: 1200px){
    width: 90%;
}
`

const Input = () => {
    const {itens, setItens} = useContext(LocalStorageItens)
    const [valueInput, setValueInput] = useState('')
    localStorage.setItem('myValues', JSON.stringify(itens))


    const onChange = e => {
        let minuscula = e.target.value.toLowerCase()
        let formatada = minuscula[0].toUpperCase() + minuscula.substring(1)
        setValueInput(formatada)
    }

    const onClick = () => {
        for (let item = 0; item < itens.length; item++) {
            if (itens[item] !== valueInput && valueInput !== '') {
                setItens([...itens, valueInput])
                localStorage.setItem('myValues', JSON.stringify(itens))
                setValueInput('')
                console.log(itens)
            }else{
                console.log("Já existente ou campo vázio")
            }
        }
    }

    return (
        <Box>
            <StyledInput type='text' value={valueInput} onChange={onChange} placeholder="Digite aqui..." />
            <StyledButton onClick={onClick} >Adicionar</StyledButton>
        </Box>
    )
}

export default Input
