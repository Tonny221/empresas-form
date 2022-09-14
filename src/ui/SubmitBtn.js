import { Button, Container } from '@mui/material'
import React from 'react'

const SubmitBtn = () => {
    return (
        <Container sx={{display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '2rem'}}>
            <Button variant='outlined'>Enviar</Button>
        </Container>
    )
}

export default SubmitBtn