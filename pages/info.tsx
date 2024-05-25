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

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
    <Box p={6}>
        <Heading as="h2" mb={4}>MemeHash Tokenomics</Heading>
        <Text mb={2}><b>Supply: 10 billion HASH tokens</b> ({""}<a href="https://basescan.org/address/0xa9b631abcc4fd0bc766d7c0c8fcbf866e2bb0445" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Contract</a>)</Text>
        <Text>- Mining in EVM networks 40% ({""}<a href="https://basescan.org/address/0xbbc4f75874930eb4d8075fcb3f48af2535a8e848" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Base pool</a>) = 4 billion</Text>
        <Text>- Mining on other networks 40% ({""}<a href="https://basescan.org/token/0x39adfb3eb6ff7F56bd5C09c62B4AB1d61997193A" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>pool</a>) = 4 billion</Text>
        <Text>- Partnerships and Listing 10% ({""}<a href="https://basescan.org/token/0xD93c0D7AF1Af07b227dDC841d2146C3FDF7D98CD" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>fond</a>) = 1 billion</Text>
        <Text>- Community Development ({""}<a href="https://basescan.org/token/0xa45B36062b50cDE45F9dc72f6Ea805AaE0b3F21c" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>rewards</a>) 5% = 500 million</Text>
        <Text>- Ecosystem Formation ({""}<a href="https://basescan.org/token/0xD9cefBFf9dFA7aE9438D1FC227982048af270e2d" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>team</a>) 5% = 500 million</Text>
        <Button colorScheme="blue" mt={4}>
            <Link href="/coin">In detail</Link>
        </Button>
    </Box>
</Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>MemeHash Roadmap</Heading>
                    <Text>
                        - Development of the concept. <Icon as={MdCheckCircle} color="green.500" /><br />
                        - Token issuance ({""}<a href="https://basescan.org/address/0xa9b631abcc4fd0bc766d7c0c8fcbf866e2bb0445" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Contract</a>) limited supply. <Icon as={MdCheckCircle} color="green.500" /><br />
                        - Founder&apos;s comment ({""}<a href="https://x.com/PrimeBlocks/status/1790817564932677791" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Link</a>).<Icon as={MdCheckCircle} color="green.500" /><br />
                        - Integration of DApp into EVM.<Icon as={MdCheckCircle} color="green.500" /><br />
                        - Formation of the EVM ecosystem.<Icon as={MdCheckCircle} color="yellow.500" /><br />
                        - Discord roles.<Icon as={MdCheckCircle} color="yellow.500" /><br />
                        - ⚡️Drop GPU for the community.<br />
                        - Integration with CMC / CG and other aggregators.<br />
                        - Integration of Analytics into Frontend.<br />
                        - CEX Listing on centralized exchanges.<br />
                        - Launch of quests and tasks (Guild/Galxy/Zealy).<br />
                        - OTC inventory market.<Icon as={MdCheckCircle} color="yellow.500" /><br />
                        - NFT collection of our #Tag.<br />
                        - Founder&apos;s comment (Link).<br />
                        - Implementation of mining (4b) in other networks.<br />
                        - ⚡️Airdrop to the community.<br />
                        - Expanded integration.<br />
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />
        </Container>
    );
}
