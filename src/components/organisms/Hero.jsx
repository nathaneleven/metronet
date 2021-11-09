import React from 'react'
import { Flex, Box, Heading, List, ListIcon, ListItem, Spacer, AspectRatio } from '@chakra-ui/layout'
import { CheckIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'

const Hero = () => {
    return (
        <>
        <Flex align="center" direction={{base: "column-reverse", md: "row"}} pb="40px" >
        <Box p="4">
            <Heading as="h1" mb="24px" >
            Verizon – Your high-speed Internet provider
            </Heading>
            <List spacing={2}>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    100% fiber-optic network 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Reliability 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Powerful connectivity 
                </ListItem>
            </List>
        </Box>
        <Spacer/>
        
        <AspectRatio w={{base:"100%", md: "3xl"}} ratio={{base:3, md:6/4 }} >
  <Image objectPosition={{base:"0 -34px", md:0}} borderRadius={{md: "0 0 0 70px"}} src="/hero-image-verizon.jpg" alt="Hero Image Verizon" />
        </AspectRatio>
        </Flex>
        </>
    )
}

export default Hero
