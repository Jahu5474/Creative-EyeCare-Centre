import { Button } from '@chakra-ui/react';
import React from 'react';
// import { authModalState } from '../Modal/Auth/AuthModal'

const AuthButton: React.FC = () =>{
    // const setAuthModalState = useSetRecoilState(authModalState);
    return(
        <Button 
            size="sm" 
            variant="navbar"
            _hover={{
            color:"orange.400"
            }}
        >
            My Account
        </Button>

    )
}

export default AuthButton;