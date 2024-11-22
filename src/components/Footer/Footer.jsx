import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColuna = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxLinha = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxLinha 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColuna>
        <FooterTitle text={'endereço'} />
        <FooterLink 
        text={'Avenida das Torres, 500, FAG, Cascavel'} 
        />
        <FooterLink 
        text={'45 9 9847-3660'} 
        />
        <FooterLink 
        text={'lnomoura@minha.fag.edu.br'} 
        />
      </StackColuna>
      
      <StackColuna>
        <FooterTitle text={'nossos serviços'} />
        <FooterLink text={'comprar casa'} />
        <FooterLink text={'vender casa'} />
        <FooterLink text={'alugar casa'} />
        <FooterLink text={'construir casa'} />
      </StackColuna>
      <StackColuna>
        <FooterTitle text={'nossa empresa'} />
        <FooterLink text={'relatórios'} />
        <FooterLink text={'entre em contato'} />
        <FooterLink text={'administração'} />
      </StackColuna>

      <StackColuna>
        <FooterTitle text={'VendasImóveis'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2024 Projeto Sandro 1 Bimestre.
        </Typography>
      </StackColuna>
    </BoxLinha>
  )
}

export default Footer
