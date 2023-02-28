import React, {useState} from 'react';
import { Input, Button, Flex, Text } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp'
import {FIREBASE_ERRORS} from '../../../firebase/errors'
 
type LoginProps = {

}

const Login: React.FC<LoginProps> = () =>{
        const setAuthModalState = useSetRecoilState(authModalState); 
    const [loginForm, setLoginForm] = useState({
        email:'',
        password:''
    });


    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        
        signInWithEmailAndPassword(loginForm.email, loginForm.password);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setLoginForm((prev)=>({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }


    return(
    <>
        <form onSubmit={onSubmit}>
            <Input 
                required
                name='email' 
                placeholder='email' 
                type='email' 
                mb={2}  
                onChange={onChange}
                fontSize="15px"
                _placeholder={{
                    color: 'gray.500'
                }}
                _hover={{
                    bg:"white",
                    border:"1px solid",
                    borderColor:"blue.500"
                }}
                _focus={{
                    outline:"none",
                    bg:"white",
                    borderColor:"blue.500"
                }}
                bg="gray.50"
            />
            <Input
                required
                name='password'
                placeholder='password'
                type='password'
                mb={2}
                onChange={onChange}
                fontSize="15px"
                _placeholder={{
                    color: 'gray.500'
                }}
                _hover={{
                    bg:"white",
                    border:"1px solid",
                    borderColor:"blue.500"
                }}
                _focus={{
                    outline:"none",
                    bg:"white",
                    borderColor:"blue.500"
                }}
                bg="gray.50"
            />
            <Text color="red" fontWeight={700} fontSize="sm">
                {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
            </Text>
            <Button
                type="submit"
                size="sm"
                variant="outline"
                mt={3}
                mb={3}
                _hover={{
                    color:"orange.400",
                    border:"1px solid orange"
                }}
                isLoading={loading}
            >
                Log In
            </Button>
            <Flex
                mb={2}
            >
                <Text
                    fontSize="9pt"
                    mr={1}
                >
                    Forgot your password?
                </Text>
                <Text
                    fontSize="9pt"
                    cursor="pointer"
                    color="orange.400"
                    onClick={()=>{
                        setAuthModalState((prev)=>({
                            ...prev,
                            view:"resetPassword"
                        }))
                    }}
                >
                    Reset
                </Text>
            </Flex>
            <Flex
                fontSize="sm"
            >
                <Text
                    mr={1}
                >
                    Don&apos;t have an account? 
                </Text>
                <Text 
                    color="orange.400"
                    fontWeight="700"
                    cursor="pointer"
                    onClick={()=>{
                        setAuthModalState((prev) => ({
                            ...prev,
                            view:"signup",
                        }))
                    }}
                >
                    SIGN UP
                </Text>
            </Flex>
        </form>
    </>
    )
}

export default Login;