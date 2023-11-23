import React, { useContext } from 'react';
import {
  Flex,
  Text,
  Heading,
  Icon,
  Image,
  Box,
  Badge,
  defineStyle,
  defineStyleConfig,
  Button,
} from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import { MdMenu, MdOutlineShoppingBag } from 'react-icons/md';

// const xl = defineStyle({
//   fontSize: 'xl',
// });

// export const linkTheme = defineStyleConfig({
//   sizes: { xl },
// });

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      backgroundColor='rgba(255,255,255,1)'
      flexDir='row'
      alignItems='center'
      justifyContent='space-between'
      pl='2rem'
      borderTop='1px solid black'
      borderBottom='1px solid black'
    >
      <Link to='/'>
        <Heading
          textTransform='uppercase'
          fontSize='3xl'
          fontWeight='200'
          color='rgba(0,0,0,1)'
        >
          //Nerv-Systems
        </Heading>
      </Link>
      <Flex pr='2rem'>
        <Button
          m='0'
          p='0 3rem'
          borderLeft='1px solid'
          borderRadius='0'
          backgroundColor='rgba(255,255,255,1)'
          _hover={{ bg: 'rgba(0,0,0,1)', color: 'rgba(255,255,255,1)' }}
          to=''
          onClick={() => openMenu()}
        >
          Products
        </Button>
        <Button
          m='0'
          p='0 3rem'
          borderLeft='1px solid'
          borderRadius='0'
          backgroundColor='rgba(255,255,255,1)'
          _hover={{ bg: 'rgba(0,0,0,1)', color: 'rgba(255,255,255,1)' }}
          to=''
        >
          Support
        </Button>
        <Button
          m='0'
          p='0 3rem'
          borderLeft='1px solid'
          borderRight='1px solid'
          borderRadius='0'
          backgroundColor='rgba(255,255,255,1)'
          _hover={{ bg: 'rgba(0,0,0,1)', color: 'rgba(255,255,255,1)' }}
          to=''
          onClick={() => openCart()}
        >
          Cart
          <Badge
            backgroundColor='rgba(255,255,255,0)'
            color='grey'
            borderRadius='100%'
            w='20px'
            h='20px'
            textAlign='center'
            fontSize='.75rem'
          >
            {checkout.lineItems?.length}
          </Badge>
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
