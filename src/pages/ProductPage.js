import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Heading,
  Flex,
  Center,
} from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';

const ProductPage = () => {
  const { handle } = useParams();

  const { fetchProductWithHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;
  return (
    <Box p='2rem'>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} m='auto'>
        <Flex justifyContent='center' alignItems='center'>
          <Image src={product.images[0].src} />
        </Flex>

        <Box>
          <Heading pb='2rem'>{product.title}</Heading>
          <Text>{product.variants[0].price.amount}</Text>
          <Text>{product.description}</Text>
          <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
            Add To Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductPage;
