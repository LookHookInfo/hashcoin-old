import { Container, Heading, Text, Divider, Box, Icon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { FaTelegram } from 'react-icons/fa';

export default function Info() {
    return (
        <Container maxW="95%" mt={8} px={4} bg="gray.100">
            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>MemeHash Roadmap</Heading>
                    
                    <Heading as="h4" mb={4} fontSize="lg">Phase 1: Conceptualization and Foundation</Heading>
                    <Text fontSize="lg">
                        <Icon as={MdCheckCircle} color="green.500" /> Concept Development: Defining the core idea and vision of MemeHash.<br />
                        <Icon as={MdCheckCircle} color="green.500" /> Token Issuance ({''}<a href="https://basescan.org/address/0xa9b631abcc4fd0bc766d7c0c8fcbf866e2bb0445" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Contract</a>): Launching the HASH token with limited supply.<br />
                        <Icon as={MdCheckCircle} color="green.500" /> Founder's Comment: ({''}<a href="https://x.com/PrimeBlocks/status/1790817564932677791" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Link</a>)<br />
                        <Icon as={MdCheckCircle} color="green.500" /> DApp Integration into EVM: Implementing the decentralized application into Ethereum Virtual Machine.<br />
                        <Icon as={MdCheckCircle} color="yellow.500" /> Formation of the HASH Ecosystem: Creating and developing the ecosystem around the product.<br />
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h4" mb={4} fontSize="lg">Phase 2: Community Building and Early Engagement</Heading>
                    <Text fontSize="lg">
                        <Icon as={MdCheckCircle} color="yellow.500" /> Discord Roles: Defining and assigning roles within the Discord community.<br />
                        <Icon as={MdCheckCircle} color="rgba(128, 128, 128, 0.5)" /> ⚡️Inventory Drop for the Community: Distributing NFT GPUs among the initial project participants (100 units).<br />
                        <Icon as={MdCheckCircle} color="yellow.500" /> Integration with Aggregators: Listing MemeHash on CoinMarketCap (CMC), CoinGecko (CG), and other aggregators.<br />
                        <Icon as={MdCheckCircle} color="rgba(128, 128, 128, 0.5)" /> More useful information in the product interface.<br />
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h4" mb={4} fontSize="lg">Phase 3: Expansion and Broader Integration</Heading>
                    <Text fontSize="lg">
                        <Icon as={MdCheckCircle} color="rgba(128, 128, 128, 0.5)" /> CEX Listing: Listing the HASH token on centralized exchanges for seamless asset trading.<br />
                        <Icon as={MdCheckCircle} color="yellow.500" /> Launch of Quests and Tasks: Introducing interactive quests and tasks on platforms like Guild, Galxe, and Zealy.<br />
                        <Icon as={MdCheckCircle} color="green.500" /> OTC Inventory Market: Creating an over-the-counter market for trading inventory.<br />
                        <Icon as={MdCheckCircle} color="rgba(128, 128, 128, 0.5)" /> NFT Collection of our #Tag: Launching a unique NFT collection.<br />
                        <Icon as={MdCheckCircle} color="rgba(128, 128, 128, 0.5)" /> Implementation of Mining in Other Networks: To expand capabilities and interact with communities across different networks, the team has allocated 4b HASH tokens for mining implementation in another network.<br />
                        <Icon as={MdCheckCircle} color="rgba(128, 128, 128, 0.5)" /> ⚡️Airdrop for the Community: Conducting an airdrop to reward active community members, liquidity providers, inventory holders, and whitelist participants.<br />
                        <Icon as={MdCheckCircle} color="rgba(128, 128, 128, 0.5)" /> Expanded Integration: Expanding the range of integrations to increase visibility.<br />
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h4" mb={4} fontSize="lg">Phase 4: Future Developments and Innovations (Under Discussion)</Heading>
                    <Text fontSize="lg">
                        <Icon as={MdCheckCircle} color="rgba(128, 128, 128, 0.5)" /> New Inventory for HASH Mining:<br />
                        <Box ml={4}>
                            • GPU Rig: Introducing a new inventory item for token mining.<br />
                            • Asic Miner Rack: Adding advanced Asic miners for enhanced mining capabilities.<br />
                            • Mining Container: Developing a mining container for large-scale operations.<br />
                        </Box>
                        <Icon as={FaTelegram} color="blue.500" /> Development of a Telegram Bot: Creating a Telegram bot for simplified access and interaction with the application.<br />
                    </Text>
                </Box>
            </Box>
        </Container>
    );
}
