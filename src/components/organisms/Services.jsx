import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex } from '@chakra-ui/layout'

const Services = () => {
    return (
<>
<Box align="center" m={{base:"10", md:"0 10 "}}>
    <Heading m="10">Verizon services</Heading>

    <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex bg="#F6F6F6" p="5" align="center" direction="column" >
      <Heading as="h3" fontSize="2xl">5G Home Internet</Heading>
      <Text>Experience the power of Verizon 5G Ultra Wideband. No data caps, no annual contracts or extra fees.</Text>
    </Flex>

    <Flex bg="#F6F6F6" p="5" align="center" direction="column" >
      <Heading as="h3" fontSize="2xl">Fios Home Internet</Heading>
      <Text>Enjoy ultra-low lag and the capacity needed to handle multiple devices in your home. On the 100% fiber-optic network.</Text>
    </Flex>

    <Flex bg="#F6F6F6" p="5" align="center" direction="column" >
      <Heading as="h3" fontSize="2xl">LTE Home Internet</Heading>
      <Text>Stream and game with the power of Verizon 4G LTE network. Plus, install on your own time with easy self-setup.</Text>
    </Flex>

  </SimpleGrid>

</Box>
</>
    )}

export default Services