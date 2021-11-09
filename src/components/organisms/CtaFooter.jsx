import React from 'react'
import { Flex, Box, Text, Spacer } from '@chakra-ui/layout'
import PhoneBt from '../atoms/PhoneBt'


const CtaFooter = () => {
    return (
<>
<Box p="8" bgColor="#F6F6F6" color="Black" align="center"  >
        <Flex maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
            <Box mb={{base:5, md:0}}>
            <Text fontSize="2xl" >
            Ready to order? Call us now!
            </Text>
            </Box>
            <Spacer/>
            <PhoneBt/>
        </Flex>
</Box>
</>
    )}


export default CtaFooter