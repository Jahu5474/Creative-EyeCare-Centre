import React, {useState} from 'react';
import { Input, Button, Flex, Text } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtom'
 
type LoginProps = {

}

const ResetPassword: React.FC<LoginProps> = () =>{
        const setAuthModalState = useSetRecoilState(authModalState); 
    const [LoginForm, setLoginForm] = useState({
        email:'',
        password:''
    });

    const onSubmit = () =>{

    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setLoginForm(prev =>({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    return(
    <>
        <form onSubmit={onSubmit}>
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
            <Input
                required
                name='password'
                placeholder='Confirm Password'
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
            >
                Submit
            </Button>
            <Flex
                fontSize="sm"

            >
                <Text
                    mr={1}

                >
                    Already have an account?
                </Text>
                <Text 
                    color="orange.400"
                    fontWeight="700"
                    cursor="pointer"
                    onClick={()=>{
                        setAuthModalState((prev) => ({
                            ...prev,
                            view:"login",
                        }))
                    }}
                >
                    Login
                </Text>
            </Flex>
        </form>
    </>
    )
}

export default ResetPassword;