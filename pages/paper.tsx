import { Container, Heading, Text, Box, Button, Divider } from "@chakra-ui/react";
import Link from 'next/link';

export default function HashCoinWhitepaper() {
    return (
        <Container maxW="95%" mt={8} px={4} bg="gray.100">
            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4} textAlign="center">Hash Coin Paper</Heading>
                    <Text fontSize="xl" textAlign="justify">
                        Welcome to the Hash Coin ecosystem, where innovation and community engagement are the driving forces behind our mission. Our tokenomics and mechanics are designed to ensure stability, incentivize participation, and support the long-term growth of our project. This document outlines the core aspects of token distribution, NFT staking mechanics, and profit distribution.
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">Contract Information</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        Participants interact with the following contracts:
                        <br />
                        • <b>NFT Contract</b>: 0x3ACCCbCDfd1ed5C4fb926c9AFFD619E546f3a95D
                        <br />
                        • <b>Inventory Contract</b>: 0x13CE10a3e09FA8000BA8A13fCbe8813f476584e7
                        <br />
                        • <b>Rewards Contract</b>: 0xA9B631ABcc4fd0bc766d7C0C8fCbf866e2bB0445
                        <br />
                        • <b>Staking Contract</b>: 0xBBc4f75874930EB4d8075FCB3f48af2535A8E848
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">Token Distribution</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        Our token distribution strategy ensures a balanced and sustainable ecosystem:
                        <br />
                        • <b>80% for Mining</b>: The majority of our tokens are available for mining, allowing participants to actively engage with the ecosystem.
                        <br />
                        • <b>20% for Project Development</b>: A portion of the tokens is allocated to support the current development and improvement of our project.
                    </Text>
                    <Link href="https://hashcoin.farm/coin" passHref>
                        <Button colorScheme="blue" mt={4} as="a">Tokenomics</Button>
                    </Link>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">NFT Staking Mechanics</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        Participants can acquire and stake NFTs to receive rewards in HASH tokens. Mining speed depends on the type and quantity of NFTs. We offer various types of NFTs:
                        <br />
                        • <b>NFT GPU</b>: Cost: $1.99 / Mining Speed: 0.042 #hash per hour
                        <br />
                        • <b>NFT Asic</b>: Cost: $9.50 / Mining Speed: 0.42 #hash per hour
                        <br />
                        • <b>NFT Farm</b>: Cost: $29.20 / Mining Speed: 2.42 #hash per hour
                        <br />
                        In the future, additional inventory such as Rig, Rack, Container will be introduced.
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">Key Features</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        • <b>Universal Participation</b>: Anyone can participate in our ecosystem without regional restrictions.
                        <br />
                        • <b>Initiation</b>: To start mining HASH tokens, a participant must create an NFT-space (registration). This minting process is free except for gas fees and is performed once per participant account. Afterward, participants can purchase NFT inventory for HASH token mining through staking. Participants have the right to exit staking and claim rewards at any time, considering the token balance in the pool. Rewards are distributed by the contract (0xBBc4f75874930EB4d8075FCB3f48af2535A8E848) on a first-come, first-served basis.
                        <br />
                        • <b>Flexibility of Staking</b>: Participants can withdraw NFTs from staking and list them for sale on the OTC NFT market if they decide to cease token mining.
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">Profit Distribution from NFT Sales</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        Profits from NFT sales are strategically allocated to ensure the stability and growth of the project:
                        <br />
                        • <b>50%</b> of the proceeds are directed to the HASH/stablecoin liquidity pool, ensuring stability and liquidity in trading pairs.
                        <br />
                        • <b>35%</b> forms reserves in the Treasury Fund: For future investments and project development.
                        <br />
                        • <b>15%</b> to the Team Fund: Provides funding for the team to continue product development and improvement.
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">Future Development</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        We strive for continuous improvement and innovation. Our future plans include:
                        <br />
                        • <b>Enhanced Analytics</b>: Adding analytical data for a deeper understanding of the HASH coin ecosystem and movement.
                        <br />
                        • <b>Improved Interface</b>: Enhancing the user interface to improve the user experience.
                        <br />
                        • <b>Community Engagement and Partner Acquisition</b>.
                    </Text>
                    <Link href="https://hashcoin.farm/road" passHref>
                        <Button colorScheme="blue" mt={4} as="a">Road Map</Button>
                    </Link>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">Conclusion</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        Hash Coin aims to create a reliable and engaging ecosystem. Our tokenomics and NFT staking mechanics are designed to ensure stability, incentivize participation, and support the long-term growth of our project. Join us in building a thriving community and a sustainable future.
                        <br />
                        Follow our social networks for additional information and updates.
                    </Text>
                </Box>
            </Box>
        </Container>
    );
}
