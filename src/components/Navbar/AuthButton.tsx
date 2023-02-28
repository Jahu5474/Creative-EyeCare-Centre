import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../atoms/authModalAtom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/clientApp'

type RightContentProps ={
    user: any;
}

const AuthButton: React.FC<RightContentProps> = ({user}) =>{
    const setAuthModalState = useSetRecoilState(authModalState);
    return(
    <>
    { user ? <Button 
                size="sm" 
                variant="navbar" 
                _hover={{color:"orange.400"}} 
                onClick={()=>signOut(auth)}
            >
                LogOut
            </Button> :
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
    }
    </>
    )
}

export default AuthButton;