import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const About = () => {
    return (
<>
    <Flex align="center" bgColor="#fff" direction={{base: "column", md: "row"}} pb="40px" >

            <AspectRatio w="100%" ratio={{base:3, md:6/4 }} >
                <Image borderRadius={{md: "0 0 70px 0"}} src="/about-metronet-image.jpg" alt="Hero Image Metronet" />
            </AspectRatio>
            
            <Box m="25px">
                <Heading mb="24px" >
                About MetroNet 
                </Heading>
                <Text>
                Metronet is a community-driven ISP (Internet Service Provider). The company supplies fiber internet, full-featured fiber phone, fiber IPTV, among other products, to their customers.<br/><br/>

                The ISP is serving over two million people in the US and is currently the eighth largest fiber-optic provider. Metronet is available in seven states, including Minnesota, Illinois, Iowa, Indiana, Michigan, Ohio, and Kentucky.  
                </Text>
            </Box>

    </Flex>
</>
    )}

export default About