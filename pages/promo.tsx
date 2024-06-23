import { Container, Heading, Text, Divider, Box, Image, Link, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaHashtag } from "react-icons/fa";

export default function Promo() {
    return (
        <Container maxW="95%" mt={8} px={4} bg="gray.100">
            <Box borderWidth="1px" borderRadius="lg" mb={5} p={6}>
                <Heading as="h2" mb={4}>Promo # Hash</Heading>
                <Text fontSize="xl">
                    Essential information for integration, partner profile completion, listing, and other marketing activities.
                    
                    <Divider mb={5} />

                    <Icon as={FaHashtag} color="green.500" boxSize="0.8em" mb="0.2em" /> Anyone can integrate Hash into platforms like NFT markets or crypto aggregators, create a review, and receive rewards from the Mining Hash team for themselves or their community.
                </Text>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5} p={6}>
                <Heading as="h2" mb={4}>Hash Coin Mining</Heading>
                <Text mb={2}><b>Project description</b></Text>
                <Text mb={2}>
                    Hash is a unique project that combines the world of memes and cryptocurrencies. Users can acquire various types of NFTs and stake them to earn Hash tokens as rewards. NFT staking opens up new opportunities for increasing productivity, efficiency, and profitability in the mining world.
                </Text>
                <Text mb={2}><b>Links</b></Text>
                <Text>
                    <Link href="https://x.com/HashCoinFarm" isExternal color="blue.500">Twitter</Link><br/>
                    <Link href="https://t.me/ChainInside/524" isExternal color="blue.500">Telegram</Link><br/>
                    <Link href="https://guild.xyz/hashcoin" isExternal color="blue.500">Guild</Link>
                </Text>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5} p={6}>
                <Heading as="h2" mb={4}>Logos 200x200</Heading>
                <SimpleGrid columns={3} spacing={10}>
                    <Image src="/img/Logo black.jpg" alt="Hash Coin Logo 1" width="200px" height="200px" />
                    <Image src="/img/Logo white.jpg" alt="Hash Coin Logo 2" width="200px" height="200px" />
                    <Image src="/img/logo.png" alt="Hash Coin Logo 3" width="200px" height="200px" />
                </SimpleGrid>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5} p={6}>
                <Heading as="h2" mb={4}>Banners</Heading>
                <Text mb={2}><b>Profile Banner (1500x500)</b></Text>
                <Image src="/img/banner.png" alt="Profile Banner" width="1500px" height="500px" />
                <Text mb={2}><b>Public Banner (800x600)</b></Text>
                <Image src="/img/post.jpg" alt="Post Banner" width="800px" height="600px" />
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5} p={6}>
                <Heading as="h2" mb={4}>Google Disk</Heading>
                <Text>
                    <Link href="https://drive.google.com/drive/folders/1uStwAUZ2e179CQf9ZPTbVvdDW9DbxjuF?usp=sharing" isExternal color="blue.500">
                        Google Drive (more promo for downloading)
                    </Link>
                </Text>
            </Box>
        </Container>
    );
}
