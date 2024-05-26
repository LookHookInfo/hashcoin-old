import { Container, Heading, Text, Divider, Box, Icon, Button, Link } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export default function Info() {
    return (
        <Container maxW="95%" mt={8} px={4} bg="gray.100">
            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>Info # Hash</Heading>
                    <Text fontSize="xl">Mining Hash offers a unique platform for acquiring HASH tokens. Users acquire NFT inventory and stake it to earn Hash tokens. The NFT inventory collection includes various types of equipment with specific mining productivity and efficiency, which account for 80% of the total HASH token volume.</Text>
                </Box>
            </Box>

            <Divider mb={5} />
        </Container>
    );
}
