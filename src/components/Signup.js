import React from 'react'

import { Button, Center, FormControl, FormLabel, Heading, Input, Stack, Text } from "@chakra-ui/react";
const Signup = () => {

    return (
        <Center h="100vh" bg="#38B2AC">
            <Stack boxShadow="md" bg="white" p='20' w="120" rounded="md">
                <Heading as='h1'>Sign up</Heading>
                <Text fontSize='xs' color='gray.600'>
                    Plese fill the data for registeration.
                </Text>

                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='Enter the name' type="name" />
                    <FormLabel mt='2'>Email</FormLabel>
                    <Input placeholder='Enter the email' type="email" />
                    <FormLabel mt='2'>Password</FormLabel>
                    <Input placeholder='Enter the Password' type="password" />
                    <FormLabel mt='2'>Confirm Password</FormLabel>
                    <Input placeholder='Confirm Password' type="password" />
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

export default Signup