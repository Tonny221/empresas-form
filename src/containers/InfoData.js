import { Paper, styled, Container, Typography, TextField, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, Stack, Box } from '@mui/material'
import React, { useState } from 'react'
import AdressBlock from '../components/AdressBlock';
import SubmitBtn from '../ui/SubmitBtn';

const ContentPaper = styled(Paper)(({ theme }) => ({
    padding: '1rem',
    [theme.breakpoints.up('sm')]: {
        padding: '6rem'
    },
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        boxShadow: 'none'
    },
    rowGap: '4rem'
}));

const PaperContainer = styled(Box)(({ theme }) => ({
    width: '60%',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
    [theme.breakpoints.down('md')]: {
        width: '90%'
    },
    margin: '4rem auto'
}))

const InfoData = () => {
    const [filials, setFilials] = useState(false)
    const [pcd, setPcd] = useState(false)
    const [contract, setContract] = useState(false)
    const [collab, setCollab] = useState(false)
    const [others, setOthers] = useState(false)
    const [vacant, setVacant] = useState(false)

    const handleVacant = () => {
        setVacant(!vacant)
    }

    const turnVacantOff = () => {
        if (vacant === true) setVacant(!vacant)
    }

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
        <PaperContainer>
            <ContentPaper elevation={24}>
                <Stack rowGap={4}>
                    <Typography variant='h3'>Informa????es sobre a empresa</Typography>
                    <TextField variant='filled' label='Nome fantasia da empresa:' />
                    <TextField variant='filled' label='Cidade onde a empresa atua:' placeholder='Adicionar endere??o completo' />
                    <Box>
                        <Typography variant='h6'>Possui filiais?</Typography>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'sim'} label='Sim' onChange={handleFilials} />
                            <FormControlLabel control={<Radio />} value={'n??o'} label='N??o' onChange={turnFilialsOff} />
                            {filials ? <AdressBlock /> : <></>}
                        </RadioGroup>
                    </Box>
                    <TextField variant='filled' label='Ramo de atividade:' />
                    <TextField variant='filled' label='N??mero de funcion??rios:' />
                    <TextField variant='filled' label='Qual hor??rio de funcionamento da empresa' />
                    <Box>
                        <Typography variant='h6'>Existem atividades em:</Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} value={'Presencial'} label='Presencial' />
                            <FormControlLabel control={<Checkbox />} value={'H??brido'} label='H??brido' />
                            <FormControlLabel control={<Checkbox />} value={'Home-office'} label='Home office' />
                        </FormGroup>
                    </Box>
                </Stack>
                <Stack rowGap={4}>
                    <Typography variant='h3'>Informa????es sobre contrato</Typography>
                    <Box>
                        <Typography variant='h6'>Contratam pessoas com defici??ncia?</Typography>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'sim'} label='Sim' onChange={handlePcd} />
                            <FormControlLabel control={<Radio />} value={'n??o'} label='N??o' onChange={turnPcdOff} />
                            {pcd ? <TextField variant='filled' placeholder='quais?' /> : <></>}
                        </RadioGroup>
                    </Box>
                    <Box>
                        <Typography variant='h6'>Qual a maior dificuldade para contrata????o?</Typography>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'qualifica????o dos candidatos'} label='Qualifica????o dos candidatos' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'experi??ncia profissional'} label='Experi??ncia profissional' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'faltam candidatos para vagas de PCD'} label='Faltam candidatos para vagas de PCD' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'escolaridade incompleta'} label='Escolaridade incompleta' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'falta de conhecimento em inform??tica'} label='Falta de conhecimento em inform??tica' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'dificuldades para divulgar as vagas'} label='Dificuldades para divulgar as vagas' onChange={turnContractOff} />
                            <FormControlLabel control={<Radio />} value={'outros'} label='Outros' onChange={handleContract} />
                            {contract ? <TextField variant='filled' /> : <></>}
                        </RadioGroup>
                    </Box>
                    <Box>
                        <Typography variant='h6'>Quais as principais caracter??sticas procuram em um colaborador?</Typography>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'Iniciativa'} label='Iniciativa' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Criatividade'} label='Criatividade' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Interesse em novas tecnologias'} label='Interesse em novas tecnologias' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Adaptabilidade'} label='Adaptabilidade' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Interesse em se desenvolver'} label='Interesse em se desenvolver' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Comunica????o'} label='Comunica????o' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'Facilidade para trabalhar em equipe'} label='Facilidade para trabalhar em equipe' onChange={turnCollabOff} />
                            <FormControlLabel control={<Radio />} value={'outros'} label='Outros' onChange={handleCollab} />
                            {collab ? <TextField variant='filled' /> : <></>}
                        </RadioGroup>
                    </Box>
                    <Box>
                        <Typography variant='h6'>Est?? contratando?</Typography>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'sim'} label='Sim' onChange={handleVacant} />
                            <FormControlLabel control={<Radio />} value={'n??o'} label='N??o' onChange={turnVacantOff}/>
                        </RadioGroup>
                    </Box>
                    {vacant ? <Box>
                        <Typography variant='h6'>Perfil de vaga:</Typography>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} value={'Financeiro'} label='Financeiro' onChange={turnOthersOff} />
                            <FormControlLabel control={<Radio />} value={'Contabilidade'} label='Contabilidade' onChange={turnOthersOff} />
                            <FormControlLabel control={<Radio />} value={'Administrativo'} label='Administrativo' onChange={turnOthersOff} />
                            <FormControlLabel control={<Radio />} value={'Outros'} label='Outros' onChange={handleOthers} />
                            {others ? <TextField variant='filled' /> : <></>}
                        </RadioGroup>
                    </Box> : <></>}
                </Stack>
                <Stack rowGap={4}>
                    <Typography variant='h3'>Informa????es para contatos</Typography>
                    <TextField variant='filled' label='email' />
                    <TextField variant='filled' label='telefone' />
                </Stack>
                <SubmitBtn />
            </ContentPaper>
        </PaperContainer>
    )
}

export default InfoData