import { Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function NavBar() {
    return (
        <Container maxW="100%" px={0} py={4} bg="black" color="white">
            <Flex direction="row" justifyContent="space-between" alignItems="center" px={4}>
                <Heading>Mining # Hash</Heading>
                <Flex alignItems="center">
                    <Link href={"/"} mx={2}>Play</Link>
                    <Link href={"/shop"} mx={2}>Shop</Link>
                    <Link href={"/info"} mx={2}>Info</Link>
                    {/* OTC */}
                    <Text mx={2} opacity={0.5}>OTC</Text>
                    {/* #Tag */}
                    <Text mx={2} opacity={0.5}>#Tag</Text>
                </Flex>
                <ConnectWallet />
            </Flex>
        </Container>
    );
};
