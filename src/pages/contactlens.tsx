import { Grid, GridItem, Box, Stack, Checkbox, CheckboxGroup, Text, Container, Image } from "@chakra-ui/react";
import React from 'react'

const categories = [
  {
    id: 1,
    name: "Category 1",
  },
  {
    id: 2,
    name: "Category 2",
  },
  {
    id: 3,
    name: "Category 3",
  },
];

const products = [
  {
    id: 1,
    name: "Product 1",
    image: "/images/1-DAY-MOIST-90PACK.png",
    description: "Product 1 description",
    categories: [1, 2],
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://via.placeholder.com/150",
    description: "Product 2 description",
    categories: [2],
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://via.placeholder.com/150",
    description: "Product 3 description",
    categories: [1],
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://via.placeholder.com/150",
    description: "Product 4 description",
    categories: [2, 3],
  },
];

const ProductShowcase = () => {
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const handleCategoryChange = (selected) => {
    const selectedIntegers = selected.map((value) => parseInt(value));
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
    </Container>
  );
};

export default ProductShowcase;
