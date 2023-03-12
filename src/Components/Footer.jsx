import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

function Footer() {
  return (
    <>
      <Box bgColor="blackAlpha.900" minH="40" p="16" color="white">
        <Stack direction={['column', 'row']}>
          <VStack w="full" alignItems="stretch" px={ "4"}>
            <Heading size="md" textAlign={["center", "left"]}>SUBSCRIBE TO GET UPDATES</Heading>
            <HStack borderBottom={'2px solid white'} py="2">
              <Input
                placeholder="Enter Email Here..."
                border="none"
                borderRadius="none"
                focusBorderColor="none"
              />
              <Button
                colorScheme="purple"
                p="0"
                variant="ghost"
                borderRadius="0 20px 20px 0"
              >
                <AiOutlineSend />
              </Button>
            </HStack>
          </VStack>

          <VStack
            w="full"
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            p={["9", "0"]}
          >
            <Heading textAlign="center" >VIDEO HUB</Heading>
            <p>All rights recived</p>
          </VStack>

          <VStack w="full" p={["4", "0"]}
          >
            <Heading size="md" >SOCIAL MEDIA</Heading>
            <Button variant="link" colorScheme={'purple'}>
              <a target="blank" href="https://www.google.co.in/">Google</a>
            </Button>
            <Button variant="link" colorScheme={'purple'}>
              <a  target="blank" href="https://www.facebook.com/">Facebook</a>
            </Button>
            <Button variant="link" colorScheme={'purple'}>
              <a  target="blank" href="https://www.github.com/">Github</a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
}

export default Footer;
