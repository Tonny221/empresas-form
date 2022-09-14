import { Paper, Typography, styled, Container, InputLabel, TextField, Grid, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material'
import React, { useState } from 'react'

const ContentPaper = styled(Paper)(({ theme }) => ({
    marginTop: '2rem',
    padding: '1.5rem',
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1.5rem'
}));

const InfoData = () => {
    const [filials, setFilials] = useState(false)
    const [pcd, setPcd] = useState(false)
    const [contract, setContract] = useState(false)
    const [collab, setCollab] = useState(false)
    const [others, setOthers] = useState(false)

    const handleOthers = () => {
        setOthers(!others)
    }

    const turnOthersOff = () => {
        if (others === true) setOthers(!others)
    }

    const handleCollab = () => {
        setCollab(!collab)
    }

    const turnCollabOff = () => {
        if (collab === true) setCollab(!collab)
    }

    const handleContract = () => {
        setContract(!contract)
    }

    const turnContractOff = () => {
        if (contract === true) setContract(!contract)
    }

    const handleFilials = () => {
        setFilials(!filials)
    }

    const turnFilialsOff = () => {
        if (filials === true) setFilials(!filials)
    }

    const handlePcd = () => {
        setPcd(!pcd)
    }

    const turnPcdOff = () => {
        if (pcd === true) setPcd(!pcd)
    }

    return (
        <Container>
            <ContentPaper elevation={24}>
                <Typography variant='h2' textAlign={'center'} fontSize={{ xs: '2.25rem', sm: '4rem' }}>Dados da empresa</Typography>
                <Grid container spacing={8} p={{ xs: 1, sm: 4 }}>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Nome fantasia da empresa:</InputLabel>
                        <TextField variant='standard' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Cidade onde a empresa atua:</InputLabel>
                        <TextField variant='standard' fullWidth placeholder='Adicionar endereço completo' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Possui filiais?</InputLabel>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'sim'} label='Sim' onChange={handleFilials} />
                            <FormControlLabel control={<Radio />} value={'não'} label='Não' onChange={turnFilialsOff} />
                            {filials ? <TextField variant='standard' fullWidth placeholder='Adicionar endereço completo' /> : <></>}
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Ramo de atividade:</InputLabel>
                        <TextField variant='standard' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Número de funcionários:</InputLabel>
                        <TextField variant='standard' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Qual horário de funcionamento da empresa?</InputLabel>
                        <TextField variant='standard' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Existem atividades em:</InputLabel>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} value={'Presencial'} label='Presencial' />
                            <FormControlLabel control={<Checkbox />} value={'Híbrido'} label='Híbrido' />
                            <FormControlLabel control={<Checkbox />} value={'Home-office'} label='Home office' />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Contratam pessoas com deficiência?</InputLabel>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'sim'} label='Sim' onChange={handlePcd} />
                            <FormControlLabel control={<Radio />} value={'não'} label='Não' onChange={turnPcdOff} />
                            {pcd ? <TextField variant='standard' placeholder='quais?' /> : <></>}
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Qual a maior dificuldade para contratação?</InputLabel>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'qualificação dos candidatos'} label='Qualificação dos candidatos' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'experiência profissional'} label='Experiência profissional' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'faltam candidatos para vagas de PCD'} label='Faltam candidatos para vagas de PCD' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'escolaridade incompleta'} label='Escolaridade incompleta' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'falta de conhecimento em informática'} label='Falta de conhecimento em informática' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'dificuldades para divulgar as vagas'} label='Dificuldades para divulgar as vagas' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'outros'} label='Outros' onChange={handleContract} />
                            {contract ? <TextField variant='filled' /> : <></>}
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Quais as principais características procuram em um colaborador?</InputLabel>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'Iniciativa'} label='Iniciativa' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Criatividade'} label='Criatividade' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Interesse em novas tecnologias'} label='Interesse em novas tecnologias' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Adaptabilidade'} label='Adaptabilidade' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Interesse em se desenvolver'} label='Interesse em se desenvolver' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Comunicação'} label='Comunicação' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Facilidade para trabalhar em equipe'} label='Facilidade para trabalhar em equipe' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'outros'} label='Outros' onChange={handleCollab} />
                            {collab ? <TextField variant='filled' /> : <></>}
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Para maiores informações, Link do site da empresa:</InputLabel>
                        <TextField variant='standard' fullWidth placeholder='email' sx={{ margin: '1rem 0' }} />
                        <TextField variant='standard' fullWidth placeholder='telefone' sx={{ margin: '1rem 0' }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Está contratando?</InputLabel>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'sim'} label='Sim' />
                            <FormControlLabel control={<Radio />} value={'não'} label='Não' />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Perfil de vaga:</InputLabel>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'Financeiro'} label='Financeiro' onChange={turnOthersOff} />
                            <FormControlLabel control={<Radio />} value={'Contabilidade'} label='Contabilidade' onChange={turnOthersOff} />
                            <FormControlLabel control={<Radio />} value={'Administrativo'} label='Administrativo' onChange={turnOthersOff} />
                            <FormControlLabel control={<Radio />} value={'Outros'} label='Outros' onChange={handleOthers} />
                            {others ? <TextField variant='standard' fullWidth /> : <></>}
                        </RadioGroup>
                    </Grid>
                </Grid>
            </ContentPaper>
        </Container>
    )
}

export default InfoData