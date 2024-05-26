import { Container, Heading, Text, Divider, Box, Icon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { FaTelegram } from 'react-icons/fa';

export default function Info() {
    return (
        <Container maxW="95%" mt={8} px={4} bg="gray.100">
            
            <Box mb={5}>
                <Heading as="h2" mb={4}>MemeHash Roadmap</Heading>
            </Box>

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>                                      
                    <Heading as="h4" mb={4} fontSize="lg">Phase 1: Conceptualization and Foundation</Heading>
                    <Text fontSize="lg">
                        <Icon as={MdCheckCircle} color="green.500" /> Concept Development: Defining the core idea and vision of MemeHash.<br />
                        <Icon as={MdCheckCircle} color="green.500" /> Token Issuance ({''}<a href="https://basescan.org/address/0xa9b631abcc4fd0bc766d7c0c8fcbf866e2bb0445" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Contract</a>): Launching the HASH token with limited supply.<br />
                        <Icon as={MdCheckCircle} color="green.500" /> Founder's Comment: ({''}<a href="https://x.com/PrimeBlocks/status/1790817564932677791" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Link</a>)<br />
                        <Icon as={MdCheckCircle} color="green.500" /> DApp Integration into EVM: Implementing the decentralized application into Ethereum Virtual Machine.<br />
                        <Icon as={MdCheckCircle} color="yellow.500" /> Formation of the HASH Ecosystem: Creating and developing the ecosystem around the product.<br />
                    </Text>
                </Box>
            </Box>
            {/* Остальной код */}
        </Container>
    );
}
