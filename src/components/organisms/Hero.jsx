import React from 'react'
import { Flex, Box, Heading, List, ListIcon, ListItem, Spacer, AspectRatio, HStack } from '@chakra-ui/layout'
import { CheckIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'

const Hero = () => {
    return (
        <>
        <HStack>
        <Flex align="center" direction={{base: "column-reverse", md: "row"}} pb="40px" >
        <Box p="4">
            <Heading as="h1" color="#003767" mb="24px" >
            MetroNet: 100% Fiber, TV and Phone for you
            </Heading>
            <List spacing={2}>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    No Data Caps 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    No Long-Term Contracts 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Award-Winning Internet Speed
                </ListItem>
            </List>
        </Box>
        <Spacer/>
        
        <AspectRatio w={{base:"100%", md: "3xl"}} ratio={{base:3, md:6/4 }} >
  <Image objectPosition={{base:"0 -34px", md:0}} borderRadius={{md: "0 0 0 70px"}} src="/hero-metronet-image.jpg" alt="Hero Image Verizon" />
        </AspectRatio>
        </Flex>
        </HStack>
        </>
    )
}

export default Hero
