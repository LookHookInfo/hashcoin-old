import { Container, Heading, Text, Divider, Box, Icon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export default function Info() {
    return (
        <Container maxW="95%" mt={8} px={4} bg="gray.100">
            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>Partners # Hash</Heading>
                    <Text fontSize="xl">Ecosystem partners</Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>Aggregators</Heading>
                    <Text mb={2}><b>GeckoTerminal</b> ({""}<a href="https://www.geckoterminal.com" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Hash/DAI</a>)</Text>
                    <Text mb={2}><b>DexTools</b> ({""}<a href="https://www.dextools.io" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Hash/DAI</a>)</Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>Media</Heading>
                    <Text>
                        - Media. <br />
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>DEX #hash</Heading>
                    <Text>- DEX.</Text>
                </Box>
            </Box>
        </Container>
    );
}
