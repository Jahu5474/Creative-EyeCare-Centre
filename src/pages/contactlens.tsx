import { Grid, GridItem, Box, Stack, Checkbox, CheckboxGroup, Text, Container, Image } from "@chakra-ui/react";
import React from 'react'
import {motion} from 'framer-motion'
import {products, categories} from '../components/data'


const ProductShowcase = () => {
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const handleCategoryChange = (selected) => {
    const selectedIntegers = selected.map((value) => parseInt(value));
    setSelectedCategories(selectedIntegers);
  };
  

  const filteredProducts = products.filter((product) => {
    console.log(products.filter)
    if (selectedCategories.length === 0) {
      return true;
    }
    return product.categories.some((category) => selectedCategories.includes(category));
  });

  return (
    <Container
        maxW="container.lg"
    >
<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 3 }}
        transition={{ duration: 0.8 }}
      >
    <Stack display="flex" direction={{ base: "column", md: "row" }}  p={4} boxShadow="sm" mb={4} mt={4}>
        
          <Text fontSize="lg" fontWeight="bold">
            Categories
          </Text>
        
        <CheckboxGroup value={selectedCategories} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <Checkbox key={category.id} value={category.id}>
              {category.name}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </Stack>
    <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
      {filteredProducts.map((product) => (
        <GridItem key={product.id}>
          <Image src={product.image} alt={product.name} style={{width:"100%", height:"auto"}}/>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </GridItem>
      ))}
    </Grid>
    </motion.div>
    </Container>
  );
};

export default ProductShowcase;
