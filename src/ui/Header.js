import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'

const HeaderBox = styled(Box)(({ theme }) => ({
    width: '100vw',
    backgroundColor: '#001f7d',
    color: 'white',
    padding: '1rem'
}));

const HeaderContainer = styled(Container)(({ theme }) => ({
    textAlign: 'center'
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
    fontWeight: '200'
}));

const Header = () => {
    return (
        <HeaderBox>
            <HeaderContainer>
                <HeaderTitle variant='h3'>Empresas parceiras</HeaderTitle>
            </HeaderContainer>
        </HeaderBox>
    )
}

export default Header