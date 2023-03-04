import { Grid, GridItem, Box, Stack, Checkbox, CheckboxGroup, Text, Container, Image, Heading, IconButton, Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from 'react'
import { GrFilter } from 'react-icons/gr'
import {motion} from 'framer-motion'
import {products, categories} from '../components/data'


const ProductShowcase = () => {
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const handleCategoryChange = (selected: string) => {
    const selectedIntegers = selected.map((value: string) => parseInt(value));
    setSelectedCategories(selectedIntegers);
  };
  

  const filteredProducts = products.filter((product) => {
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
    <Stack display="flex" direction={{ base: "column", md: "row" }} justify="center" alignItems="center" p={4} boxShadow="sm" mb={4} mt={4} gap={3}>
        
        
        <CheckboxGroup value={selectedCategories} onChange={handleCategoryChange}>
                     <Text>Filter By Category:</Text>
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
            <Heading
                size="sm"
            >
            {product.name}
            </Heading>
            <Text>
            {product.price}
            </Text>
        </GridItem>
      ))}
    </Grid>
    </motion.div>
    </Container>
  );
};

export default ProductShowcase;
