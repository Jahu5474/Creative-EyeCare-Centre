import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const config: ThemeConfig={
  initialColorMode:'light',
  useSystemColorMode:false,
}
const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#000000",

    },
  },
  fonts:{
    body: 'Open Sans, sans-serif',
  },
})

export default theme

