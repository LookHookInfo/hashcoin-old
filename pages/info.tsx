import { Container, Heading, Text, Divider, Box, Icon } from "@chakra-ui/react";
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

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>Whitepaper/Mechanics #hash</Heading>
                    <Text>- 80% of tokens are allocated for NFT staking, ensuring stability and protection of our ecosystem.</Text>
                    <Text>- 10% is allocated as a reward for partners, trading platforms, and their communities, incentivizing active participation and encouraging their support in the project&apos;s development.</Text>
                    <Text>- 5% are allocated to various quests, tasks, and events that contribute to the growth of our community.</Text>
                    <Text>- The remaining 5% is used to strengthen the ecosystem through liquidity provision, support for external developers, and integration of new solutions for our users.</Text>
                    <Divider mb={5} />
                    <Text mb={4}><b>Participants acquire and stake NFTs to receive #hash tokens as rewards, with mining speed depending on the quantity and characteristics of NFTs. The project provides for 4 types of NFTs:</b></Text>
                    <Text mb={2}>- NFT Hub / 0$ / explorer</Text>
                    <Text mb={2}>- NFT GPU / $1.99 / explorer</Text>
                    <Text mb={2}>- NFT Asic / $9.50 / explorer</Text>
                    <Text mb={2}>- NFT Farm / $29.20 / explorer</Text>
                    <Text>- Anyone can participate, there are no regional restrictions.</Text>
                    <Text>- To mine #hash tokens, it is necessary to mint NFT premises, minting is one-time per participant account. Cost of NFT 0 USDT + gas.</Text>
                    <Text>- Acquiring NFT GPU and staking, mining speed # 0.042 per hour / price $1.99 each.</Text>
                    <Text>- Acquiring NFT Asic and staking, mining speed # 0.42 per hour / price $9.50 each.</Text>
                    <Text>- Acquiring NFT Farm and staking, mining speed # 2.42 per hour / price $29.20 each.</Text>
                    <Divider mb={5} />
                    <Text><b>Profit distribution from NFT sales:</b></Text>
                    <Text>- Liquidity Pool HASH/USDT (50%): Ensures stability and liquidity in the trading pairs. / explorer</Text>
                    <Text>- Treasury Fund (35%): Forms reserves for future investments and project development. / explorer</Text>
                    <Text>- Team Fund (15%): Provides funding for the team to continue product development and enhancement. / explorer</Text>
                    <Divider mb={5} />
                    <Text>
                        <span style={{ color: 'red' }}>*</span>
                        We are working on adding analytical data and improving the interface.
                    </Text>

                </Box>
            </Box>
        </Container>
    );
}
