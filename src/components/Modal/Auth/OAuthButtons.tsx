import React from 'react'
import { Flex, Button, Image } from '@chakra-ui/react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp'

const OAuthButtons: React.FC = () => {
    const [SignInWithGoogle, user, loading, Error] = useSignInWithGoogle(auth);
    return (
        <Flex>
            <Button
                variant="outline"
                mb={4}
                _hover={{
                    color: "orange.400",
                    border: "1px solid orange"
                }}
                onClick={() => SignInWithGoogle()}
            >
                <Image
                    mr={4}
                    h="22px"
                    src="/images/google.png"
                    alt="google"
                />
                Continue With Google
            </Button>
        </Flex>
    )
}
export default OAuthButtons;