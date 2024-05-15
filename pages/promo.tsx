import { Container, Heading, Text, Divider, Box, Image } from "@chakra-ui/react";

export default function Info() {
    return (
        <Container maxW="95%" mt={8} px={4} bg="gray.100">
            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>Promo # Hash</Heading>
                    <Text fontSize="xl">Promo</Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>Logo</Heading>
                    <Text mb={2}><b>Logo 100x100</b></Text>
                    <Image src="/img/logo100.png" alt="Hash Coin Logo" boxSize="100px" />
                    <Text mb={2}><b>Logo 200x200</b></Text>
                    <Image src="/img/logo200.png" alt="Hash Coin Logo" boxSize="200px" />
                </Box>
            </Box>
        </Container>
    );
}
