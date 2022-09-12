import { Paper, Typography, styled, Container, InputLabel, TextField, Grid } from '@mui/material'
import React from 'react'

const ContentPaper = styled(Paper)(({ }) => ({
    marginTop: '2rem',
    padding: '1.5rem'
}));

const InfoData = () => {
    return (
        <Container>
            <ContentPaper elevation={24}>
                <Typography variant='h2' textAlign={'center'} fontSize={{xs: '2.25rem', sm: '4rem'}}>Dados da empresa</Typography>
                <Grid container spacing={8} justifyContent='center' mt={{ sm: '0.25rem'}} p={{xs: 1, sm : 4}}>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Nome fantasia da empresa:</InputLabel>
                        <TextField variant='standard' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Cidade onde a empresa atua:</InputLabel>
                        <TextField variant='standard' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Nome:</InputLabel>
                        <TextField variant='standard' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Nome:</InputLabel>
                        <TextField variant='standard' fullWidth />
                    </Grid>
                </Grid>
            </ContentPaper>
        </Container>
    )
}

export default InfoData