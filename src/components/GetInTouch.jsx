import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {
    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent='center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text='Entre em contato para comprar um imóvel' 
            textAlign='center'
            />
            <Paragraph 
            text='Nosso compromisso é garantir uma experiência de compra de casa profissional e agradável para você. \
            Se você deseja adquirir um imóvel para começar a viver com sua família em uma área que você ama, clique no botão abaixo.'
            maxWidth='sm'
            mx={0}
            textAlign='center'
            />
            <Button 
            component={Link} 
            to='/contato'
            variant="contained" 
            size="medium"
            sx={{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                Entre em contato
            </Button>
        </Stack>
    )
}

export default GetInTouch;
