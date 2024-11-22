import React, { useState } from 'react';
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title';
import Paragraph from './Paragraph';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);  // Define o índice inicial como 0

    const imageData = [
        {
            alt: 'imagem1',
            url: 'https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?cs=srgb&dl=pexels-pixabay-259751.jpg&fm=jpg'
        },
        {
            alt: 'imagem2',
            url: 'https://images.pexels.com/photos/5411784/pexels-photo-5411784.jpeg?cs=srgb&dl=pexels-andrea-davis-5411784.jpg&fm=jpg'
        },
        {
            alt: "imagem3",
            url: 'https://images.pexels.com/photos/356809/pexels-photo-356809.jpeg?cs=srgb&dl=pexels-daniel-frank-356809.jpg&fm=jpg'
        },
        {
            alt: "imagem4",
            url: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?cs=srgb&dl=pexels-get-lost-mike-6267516.jpg&fm=jpg'
        },
        {
            alt: "imagem5",
            url: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg'
        },
    ];

    const renderSlides = imageData.map((image) => (
        <div key={image.alt}>
            <img 
                src={image.url} 
                alt={image.alt} 
                style={{ width: '100%', height: 'auto' }}  // Ajusta a imagem ao contêiner
            />
        </div>
    ));

    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 8,
                px: 2,
                display: { xs: 'flex' },
            }}
        >
            <Box
                component='section'
                sx={{
                    paddingBottom: 3,
                }}
            >
                <Title 
                    text='Planos e Dimensões'
                    textAlign='center'
                />
                <Typography
                    variant='h5'
                    component='h4'
                    align='center'
                    sx={{
                        paddingTop: 1,
                    }}
                >
                    Galeria de Quartos
                </Typography>
                <Paragraph 
                    text='Temos mais de 5000 avaliações e nossos clientes confiam na qualidade dos nossos produtos. Se você estiver interessado, entre em contato conosco.' 
                    maxWidth='sm'
                    mx='auto'
                    textAlign='center'
                />
            </Box>

            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                    centerSlidePercentage={40}
                    thumbWidth={180}
                    dynamicHeight={false}
                    centerMode={false}
                    showArrows={false}
                    autoPlay={false}
                    infiniteLoop={true}
                    selectedItem={currentIndex}  // Mantém o índice atual do slide
                    onChange={handleChange}
                    className="carousel-container"
                >
                    {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery;
