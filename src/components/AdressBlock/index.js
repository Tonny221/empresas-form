import { Grid, TextField } from '@mui/material'
import React from 'react'

const AdressBlock = () => {
  return (
    <>
        <Grid container spacing={2} mt={1}>
            <Grid item md={4}>
                <TextField variant='filled' label='Estado' fullWidth />
            </Grid>
            <Grid item md={4}>
                <TextField variant='filled' label='Cidade' fullWidth />
            </Grid>
            <Grid item md={4}>
                <TextField variant='filled' label='Bairro' fullWidth />
            </Grid>
            <Grid item md={6}>
                <TextField variant='filled' label='Rua' fullWidth />
            </Grid>
            <Grid item md={2}>
                <TextField variant='filled' label='Número' fullWidth />
            </Grid>
            <Grid item md={4}>
                <TextField variant='filled' label='CEP' fullWidth />
            </Grid>
        </Grid>
    </>
  )
}

export default AdressBlock