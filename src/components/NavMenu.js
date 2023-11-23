import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Grid,
  Flex,
  Image,
  Box,
  VStack,
} from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';

const NavMenu = () => {
  const { isMenuOpen, closeMenu, products, fetchAllProducts } =
    useContext(ShopContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement='top' size='sm'>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <VStack p='2rem'>
              <p>Pre-Built PCs</p>
              {products
                .filter((product) => product.productType === 'computer')
                .map((product) => (
                  <Button
                    m='0'
                    p='0 3rem'
                    border='none'
                    borderRadius='0'
                    backgroundColor='rgba(255,255,255,1)'
                    _hover={{
                      bg: 'rgba(0,0,0,1)',
                      color: 'rgba(255,255,255,1)',
                    }}
                    onClick={closeMenu}
                    fontSize='2.4rem'
                    fontWeight='100'
                    textTransform='uppercase'
                  >
                    <Link to={`/products/${product.handle}`} key={product.id}>
                      {product.title}
                    </Link>
                  </Button>
                ))}
              <p>Monitors</p>
              {products
                .filter((product) => product.productType === 'monitor')
                .map((product) => (
                  <Button
                    m='0'
                    p='0 3rem'
                    border='none'
                    borderRadius='0'
                    backgroundColor='rgba(255,255,255,1)'
                    _hover={{
                      bg: 'rgba(0,0,0,1)',
                      color: 'rgba(255,255,255,1)',
                    }}
                    onClick={closeMenu}
                    fontSize='2.4rem'
                    fontWeight='100'
                    textTransform='uppercase'
                  >
                    <Link to={`/products/${product.handle}`} key={product.id}>
                      {product.title}
                    </Link>
                  </Button>
                ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter textAlign='center'>
            <Text w='100%'>Copyright Nerv Systems</Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavMenu;
