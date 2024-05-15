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
                    <Text mb={2}><b>DexTools</b> ({""}<a href="https://www.dextools.io/app/en/base/pair-explorer/0x72cd910631a66149d3ce95d8c382de1e1d758096?t=1715768426824" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Hash Coin</a>) 0x72cd910631a66149d3ce95d8c382de1e1d758096</Text>
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
