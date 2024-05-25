import { Container, Flex, Heading, Link, Text, Box } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { FiExternalLink } from "react-icons/fi";

export default function NavBar() {
    return (
        <Container maxW="95%" px={0} py={4} bg="black" color="white">
            <Flex direction="row" justifyContent="space-between" alignItems="center" px={4}>
                <Heading display={["none", "block"]}>Mining # Hash</Heading>
                <Flex alignItems="center">
                    <Link href={"/"} mx={2}>Play</Link>
                    <Link href={"/shop"} mx={2}>Shop</Link>
                    <Link href={"/info"} mx={2}>Info</Link>
                    {/* OTC */}
                    <Link href="https://opensea.io/collection/farm-inventory" isExternal mx={2} display="flex" alignItems="center">
                        <Box as="span" display="flex" alignItems="center">
                            OTC <FiExternalLink style={{ marginLeft: '4px' }} />
                        </Box>
                    </Link>
                </Flex>
                <ConnectWallet />
            </Flex>
        </Container>
    );
}
