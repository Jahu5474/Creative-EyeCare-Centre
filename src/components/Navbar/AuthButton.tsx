import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../atoms/authModalAtom'


const AuthButton: React.FC = () =>{
    const setAuthModalState = useSetRecoilState(authModalState);
    return(
    <>
        <Button 
            size="sm" 
            variant="navbar"
            _hover={{
            color:"orange.400"
            }}
            onClick={()=> setAuthModalState ({open: true, view: 'login'})}
        >
            My Account
        </Button>
    </>
    )
}

export default AuthButton;