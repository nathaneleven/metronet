import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack, List, ListIcon, ListItem, Spacer } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { CheckIcon } from '@chakra-ui/icons'
const About = () => {
    return (
        <>
        <Stack w="100%" justify="center" flexDirection={["column","column","column","column","row"]}>

            <Flex w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/about-metronet-image.jpg" alt="About Image Metronet" />
                </AspectRatio>
            </Flex>

                <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading mb="24px">
                    About MetroNet
                    </Heading>
                        <Text>
                        Metronet is a community-driven ISP (Internet Service Provider). The company supplies fiber internet, full-featured fiber phone, fiber IPTV, among other products, to their customers.<br/><br/>

                        The ISP is serving over two million people in the US and is currently the eighth largest fiber-optic provider. Metronet is available in seven states, including Minnesota, Illinois, Iowa, Indiana, Michigan, Ohio, and Kentucky.  
                        </Text>
                </Box>
                </Box>
                </Stack>
        </>
    )}

export default About