import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function Videos() {
  const videosArr = [
    {
      name: 'Video 1',
      video:
        'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    },
    {
      name: 'Video 2',
      video:
        'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    },
    {
      name: 'Video 3',
      video:
        'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    },
    {
      name: 'Video 4',
      video:
        'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    },
    {
      name: 'Video 5',
      video:
        'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    },
    {
      name: 'Video 6',
      video:
        'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    },
  ];

  const [videosrc, setVideosrc] = useState(videosArr[0].video);
  const [headtitle, setHeadtitle] = useState(videosArr[0].name);

  return (
    <>
      <Stack direction={['column', 'row']} h="100vh">
        <VStack w="full">
          <video
            controls
            controlsList="nodownload"
            src={videosrc}
            style={{
              width: '100%',
            }}
          ></video>
          <VStack alignItems={'flex-start'} p="4" w="full">
            <Heading>{headtitle}</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              facere in asperiores! Quibusdam provident ullam sequi iste
              veritatis eius, tempora qui nisi eligendi, quis nesciunt sapiente
              doloribus officiis ratione veniam?
            </Text>
          </VStack>
        </VStack>

        <VStack
          w={['full', 'xl']}
          alignItems="stretch"
          p="8"
          spacing={'8'}
          overflowY="auto"
        >
          {videosArr.map((data) => (
            <Button
              varient="ghost"
              colorScheme="purple"
              onClick={() => {
                setVideosrc(data.video);
                setHeadtitle(data.name);
              }}
            >
              {data.name}
            </Button>
          ))}
        </VStack>
      </Stack>
    </>
  );
}

export default Videos;
