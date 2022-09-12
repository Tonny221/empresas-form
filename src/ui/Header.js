import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'

const HeaderBox = styled(Box)(({}) => ({
    width: '100vw',
    backgroundColor: '#001f7d',
    color: 'white',
    padding: '1rem'
}));

const HeaderContainer = styled(Container)(({}) => ({
    textAlign: 'center'
}));

const HeaderTitle = styled(Typography)(({}) => ({
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