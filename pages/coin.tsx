import { Container, Heading, Text, Box, Divider } from "@chakra-ui/react";

export default function Info() {
    return (
        <Container maxW="95%" mt={8} px={4} bg="gray.100">
            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4} textAlign="center">Hash Coin Tokenomics</Heading>
                    <Text fontSize="xl" textAlign="justify">A breakdown of the tokenomics of the Hash Coin project.</Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">General Information</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        • <b>Token Name:</b> Hash Coin<br />
                        • <b>Token Symbol:</b> HASH<br />
                        • <b>Network:</b> Base<br />
                        • <b>Total Supply:</b> 10 billion HASH
                        • <b>Contract:</b> 0xA9B631ABcc4fd0bc766d7C0C8fCbf866e2bB0445
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">Mining Allocation</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        <b>1. Mining - 80% (8 billion tokens)</b><br />
                        These tokens are designated for mining through the staking of NFT inventory.
                    </Text>
                    <Text fontSize="lg" textAlign="justify">
                        &nbsp;&nbsp;&nbsp;&nbsp;• <b>Mining on EVM Networks - 40% (4 billion tokens)</b><br />
                        These tokens are in the mining pool on the Base network and are available for mining now.
                        <br />
                        Staking Contract: 0xBBc4f75874930EB4d8075FCB3f48af2535A8E848
                    </Text>
                    <Text fontSize="lg" textAlign="justify">
                        &nbsp;&nbsp;&nbsp;&nbsp;• <b>Mining on Other Networks - 40% (4 billion tokens)</b><br />
                        These tokens are held in a team reserve address and are intended for topping up the Staking Contract on the Base network or for creating a similar contract on other networks as decided by the project team.
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">Partnerships and Listing</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        <b>2. Partnerships and Listing - 10% (1 billion tokens)</b><br />
                        These tokens are intended for integration programs, partner community incentives, and providing liquidity on staking platforms.
                        <br />
                        Currently held in the team reserve address.
                        <br />
                        Unused tokens may be sent to the Staking Contract.
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">Community Development (Rewards)</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        <b>3. Community Development (Rewards) - 5% (500 million tokens)</b><br />
                        These tokens are intended for community development and incentives.
                        <br />
                        Interaction with influencers, bloggers, and rewarding project ambassadors.
                        <br />
                        Rewards for participating in various quests and completing valuable tasks.
                        <br />
                        Currently held in the team reserve address.
                        <br />
                        Unused tokens may be sent to the Staking Contract.
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">Ecosystem Formation (Team)</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        <b>4. Ecosystem Formation (Team) - 5% (500 million tokens)</b><br />
                        These tokens are intended for initial ecosystem formation, liquidity pool funding, and developer incentives.
                        <br />
                        Currently held in the team reserve address.
                        <br />
                        Unused tokens may be sent to the Staking Contract.
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h3" mb={4} fontSize="lg">Special Features</Heading>
                    <Text fontSize="lg" textAlign="justify">
                        We focus on token mining through the staking of NFT inventory. However, to enhance incentives and opportunities, we use 20% of the tokens for marketing and project development in the early stages. This strategy allows us to rapidly expand the ecosystem, integrate partner communities, and ensure liquidity across various platforms, ultimately contributing to the growth and success of the project.
                    </Text>
                </Box>
            </Box>
        </Container>
    );
}
