import {
    Button,
    Container,
    Heading,
    Input,
    VStack,
    HStack,
    Text,
    Avatar,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
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
            <Heading>Geeky Gamer</Heading>
            <Avatar alignSelf={"center"} boxSize={"32"}></Avatar>
            <Input
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor={'purple.500'}
            />
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

           
            <Button colorScheme={'purple'} type={'submit'}>
              Sign Up
            </Button>

            <HStack alignSelf={"flex-end"}>
              <Text textAlign={'right'}>Already Sign Up?{""}</Text>
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/login'}>Login In</Link>
              </Button>
            </HStack>
          </VStack>
        </form>
      </Container>
    </></>
  )
}

export default Signup
