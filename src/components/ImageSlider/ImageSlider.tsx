import { Box, Image, Button, Container } from "@chakra-ui/react";
import { useState } from "react";


const images = [
  {
    src: "/images/DIOR-30MONTAIGNE-S3U-12A1.jpg",
  },
  {
    src: "/images/BOTTEGA-1.jpg",
  },
  {
    src: "/images/POMELLATO-2.jpg",
  }
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <Container
        height="60vh"
    >
    <Box>
      <Image boxSize="sm" src={images[currentImage].src} alt="sunglasses" />
      <Button onClick={nextImage}>Next</Button>
    </Box>
    </Container>
  );
};

export default ImageSlider;
