import { Button, Center, FormControl, FormLabel, Heading, Input, Stack, Text } from "@chakra-ui/react";
const Login = () => {
 

    return (
        <Center h="100vh" bg="#38B2AC">
            <Stack boxShadow="md" bg="white" p='20'w="96" rounded="md">
            <Heading as='h1'>Log in</Heading>
            <Text fontSize='xs' color='gray.600'>
                Plese log in with data you entered during registeration.
                </Text>

                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Enter the email' />
                    <FormLabel mt='4'>Password</FormLabel>
                    <Input placeholder='Enter the Password' type='password' />
                </FormControl>
                <Stack justify='center' color="blue.900" fontSize="sm" spacing='3'>
                    <Text as='div' textAlign="center">
                        <span >Don&lsquo;t have an account?</span>
                        <Button colorScheme="purple" variant="link" fontSize="sm">Sign up</Button>
                    </Text>
                    <Button colorScheme="purple" variant="link" fontSize="sm">Forget Password? </Button>
                </Stack>

            </Stack>
        </Center>
  )
}

export default Login