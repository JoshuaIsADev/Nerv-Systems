import React from 'react';
import { Box, Button, Text, Image, Center } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      backgroundColor='rgba(255,255,255,1)'
      w='100%'
      h='100vh'
      position='relative'
    >
      <Image
        src='https://cdn.shopify.com/s/files/1/0633/2681/4384/files/North_KV_15_Chalk-2560.webp?v=1700678229'
        h='100%'
        w='100%'
        m='auto'
        objectFit='cover'
      />
    </Box>
  );
};

export default Hero;
