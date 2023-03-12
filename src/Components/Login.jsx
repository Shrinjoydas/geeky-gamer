import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <>
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'streach'}
            spacing={'8'}
            w={["full", "96"]}
            m={'auto'}
            my={'16'}
          >
            <Heading>Welcome Back</Heading>
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
            />

            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/forgotpassword'}>Forget Password?</Link>
            </Button>

            <Button colorScheme={'purple'} type={'submit'}>
              Log In
            </Button>

            <HStack alignSelf={"flex-end"}>
              <Text textAlign={'right'}>New User?</Text>
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </VStack>
        </form>
      </Container>
    </>
  );
}

export default LogIn;
