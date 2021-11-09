import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const About = () => {
    return (
<>
    <Flex align="center" bgColor="#F6F6F6" direction={{base: "column", md: "row"}} pb="40px" >

            <AspectRatio w="100%" ratio={{base:3, md:6/4 }} >
                <Image borderRadius={{md: "0 0 70px 0"}} src="/about-verizon-image.jpg" alt="Hero Image Verizon" />
            </AspectRatio>
            
            <Box m="25px">
                <Heading mb="24px" >
                    About Verizon 
                </Heading>
                <Text>
                    Verizon was founded on June 30, 2000, in the United States, through the merger of Bell Atlantic and GTE Corps. Today, the company is one of the world's leading telecommunications companies.<br/><br/>

                    Present in more than 2.700 cities in the United States and abroad, the company provides internet, cable TV, landline and mobile telephony services. In addition, Verizon has been investing its efforts in interactive entertainment, digital media and the Internet of Things.<br/><br/> 

                    Verizon employs more than 153,000 people and serves 110.8 million mobile subscribers, 5.8 million cable TV customers and 6.9 million Internet consumers. 
                </Text>
            </Box>

    </Flex>
</>
    )}

export default About