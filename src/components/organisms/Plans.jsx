import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'

const Plans = () => {
    return (
<>
<Box align="center" m={{base:"10", md:"0 10 "}}>
    <Heading m="10">Pick your speed</Heading>

    <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex bg="#F6F6F6" p="5" align="center" direction="column" >
      <Heading as="h3" fontSize="2xl">Gigabit Connection</Heading>
      <Text>Ideal for a virtually seamless entertainment experience. Up to 940/880 Mbps.</Text>

      <Flex align="start" direction="row" fontWeight="700">
        <Box fontSize="29px" mt="7px" >$</Box>
        <Box fontSize="94px" color="#ee0000" mt="-25px">89</Box>
        <Box direction="column">
            <Box fontSize="43px" textAlign="start" mb="-18px" color="#ee0000" >99</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box><Box fontSize="13px" >w/AutoPay</Box>
        </Box>
      </Flex>

      <CallNowPhoneBt/>
    </Flex>

    <Flex bg="#F6F6F6" p="5" align="center" direction="column" >
      <Heading as="h3" fontSize="2xl">400 Mbps</Heading>
      <Text>Great for multiple users, binge streaming and sharing large files.</Text>

      <Flex align="start" direction="row" fontWeight="700">
        <Box fontSize="29px" mt="7px" >$</Box>
        <Box fontSize="94px" color="#ee0000" mt="-25px">64</Box>
        <Box direction="column">
            <Box fontSize="43px" textAlign="start" mb="-18px" color="#ee0000">99</Box><Box fontSize="21px" textAlign="start" >/mo.</Box>
        </Box>
      </Flex>
      <Box fontSize="13px" m="-25px 0 25px" fontWeight="700" >w/Auto Pay + taxes & equip. charges.</Box>
      <CallNowPhoneBt/>
    </Flex>

    <Flex bg="#F6F6F6" p="5" align="center" direction="column" >
      <Heading as="h3" fontSize="2xl">200 Mbps</Heading>
      <Text>Stream and download movies, shows and photos.</Text>

      <Flex align="start" direction="row" fontWeight="700">
        <Box fontSize="29px" mt="7px" >$</Box>
        <Box fontSize="94px" color="#ee0000" mt="-25px">39</Box>
        <Box direction="column">
            <Box fontSize="43px" textAlign="start" mb="-18px" color="#ee0000">99</Box><Box fontSize="21px" textAlign="start" >/mo.</Box>
        </Box>
      </Flex>
      <Box fontSize="13px" m="-25px 0 25px" fontWeight="700" >w/Auto Pay + taxes & equip. charges.</Box>

      <CallNowPhoneBt/>
    </Flex>

  </SimpleGrid>

</Box>
</>
    )}



export default Plans