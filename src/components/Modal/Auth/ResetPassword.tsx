import React, {useState} from 'react';
import { Input, Button, Flex, Text, Icon } from '@chakra-ui/react'
import { MinusIcon } from '@chakra-ui/icons'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtom'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp'
import { sendPasswordResetEmail } from 'firebase/auth';


const ResetPassword: React.FC = () =>{
    const setAuthModalState = useSetRecoilState(authModalState); 
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);


    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        
        await sendPasswordResetEmail(email);
        setSuccess(true)
    };
    return(
        <Flex
            direction="column"
            alignItems="center"
            width="100%"
        >
        {success ? (
            <Text mb={4}>Check your email :)</Text>
        ) : (
            <>
            <Text
                fontSize="sm"
                textAlign="center"
                mb={4}
            >
                Enter the email you used with your account and we'll send you a reset link
            </Text>
            <form onSubmit={onSubmit}>
                <Input
                    required
                    name="email"
                    placeholder="email"
                    type="email"
                    onChange={(event)=>setEmail(event.target.value)}
                    mb={3}
                />
                <Button
                    type="submit"
                    size="sm"
                    variant="outline"
                    mb={3}
                    _hover={{
                        color:"orange.400",
                        border:"1px solid orange"
                    }}
                    isLoading={sending}
                >
                    Reset Password
                </Button>
                </form>
                </>
                )}
                <Flex
                    alignItems="center"
                    fontSize="sm"
                    fontWeight="700"
                    cursor="pointer"
                >
                    <Text
                    onClick={()=>{
                        setAuthModalState((prev)=>({
                            ...prev,
                            view:'login'
                        }))
                    }}
                    >
                        Login
                    </Text>
                    <Icon 
                        as={MinusIcon}
                        mr={2}
                        ml={2}

                    />
                    <Text
                    onClick={()=>{
                        setAuthModalState((prev)=>({
                            ...prev,
                            view:'signup'
                        }))
                    }}
                    >
                        Signup
                    </Text>
                </Flex>

        </Flex>
    )



}
export default ResetPassword;