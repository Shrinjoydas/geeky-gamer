import React from 'react';
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';

function Home() {
  return (
    <>
      <Box>
        <MyCarousel />

        <Container maxW="container.xl" minH="100vh" p="16">
          <Heading
            textTransform="uppercase"
            py="2"
            w="fit-content"
            mx="auto"
            my="4"
            borderBottom="2px solid"
            alignItems="center"
          >
            Services
          </Heading>

          <Stack
            h="full"
            p="4"
            alignItems="center"
            direction={['column', 'row']}
          >
            <Image src={img5} h={['40', '400']} filter="hue-rotate(-130deg)" />
            <Text
              letterSpacing={'widest'}
              lineHeight="190%"
              p={['4', '16']}
              textAlign="center"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              labore, quae quisquam debitis expedita suscipit quos doloribus
              obcaecati qui error dolorem cumque adipisci sunt dolores, soluta
              minus? Nulla recusandae totam ipsum voluptatum blanditiis amet
              ipsa provident sunt repellat sit molestias maiores eligendi
              ducimus, impedit labore minima velit, veritatis doloribus.
              Consequuntur consectetur assumenda sequi pariatur dignissimos
              incidunt error quo repudiandae, quidem fugiat architecto. Alias
              rem ut, nihil tenetur itaque iure et repellat voluptas optio magni
              quas numquam nulla porro necessitatibus, at tempora quaerat
              sapiente voluptates aut eveniet inventore fuga veritatis quos.
              Unde incidunt saepe corrupti rem quidem rerum modi eos dolore?
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    showArrows={false}
    showStatus={false}
    interval={2000}
  >
    <Box w={'full'} h={['90vh', '100vh']}>
      <Image src={img2} />
      <Heading
        bgColor={'whiteAlpha.600'}
        color={'black'}
        {...headingOptions}
       
      >
        Future is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={['90vh', '100vh']}>
      <Image src={img1} />
      <Heading
        bgColor={'whiteAlpha.600'}
        color={'black'}
        {...headingOptions}
        
      >
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={['90vh', '100vh']}>
      <Image src={img3} />
      <Heading
        bgColor={'whiteAlpha.600'}
        color={'black'}
        {...headingOptions}
      
      >
        Gaming on Console
      </Heading>
    </Box>

    <Box w={'full'} h={['90vh', '100vh']}>
      <Image src={img4} />
      <Heading
        bgColor={'whiteAlpha.600'}
        color={'black'}
        {...headingOptions}
       
      >
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
