import { Button, styled } from '@mui/material'
import React from 'react'

const Btn = styled(Button)(({ theme }) => ({
    width: '8rem',
    margin: '0 auto'
}))

const SubmitBtn = () => {
    return (
        <Btn variant='contained'>Enviar</Btn>
    )
}

export default SubmitBtn