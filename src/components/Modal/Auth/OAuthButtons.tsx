import React from 'react'
import { Flex, Button, Image } from '@chakra-ui/react'

const OAuthButtons:React.FC = () =>{
    return(
        <Flex>
            <Button
                variant="outline"
                mb={4}
                _hover={{
                    color:"orange.400",
                    border:"1px solid orange"
                }}
            >
                <Image 
                    mr={4}
                    h="22px"
                    src="/images/google.png"
                />
                Continue With Google
            </Button>
        </Flex>
    )
}
export default OAuthButtons;