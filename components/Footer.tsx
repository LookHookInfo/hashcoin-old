import React from 'react';
import { Flex, Link, Box, Text, Divider, Icon } from "@chakra-ui/react";
import { FaTwitter, FaDiscord, FaTelegram, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <Box backgroundColor="#01111f" color="#ffffff" padding="1rem">
            <Flex justifyContent="space-between" width="100%" maxWidth="95%" margin="0 auto" wrap="wrap">
                {/* First Column */}
                <Box flex="1" textAlign="center" padding="1rem">
                    <Text><b>LookHook</b></Text>
                    <Text>
                        <Link href="https://lookhook.info" isExternal color="white">
                            Team <Icon as={FaExternalLinkAlt} marginLeft="0.2rem" />
                        </Link>
                    </Text>
                    <Text>
                        <Link href="https://opensea.io/collection/farm-inventory" isExternal color="white">
                            OTC <Icon as={FaExternalLinkAlt} marginLeft="0.2rem" />
                        </Link>
                    </Text>
                    <Text color="gray.400">Invest</Text>
                </Box>

                <Divider orientation="vertical" height="auto" borderColor="gray.600" display={{ base: "none", md: "block" }} />

                {/* Second Column */}
                <Box flex="1" textAlign="center" padding="1rem">
                    <Link href="https://hashcoin.farm/coin" color="white">Coin</Link>
                    <br />
                    <Link href="https://hashcoin.farm/road" color="white">Road</Link>
                    <br />
                    <Link href="https://hashcoin.farm/paper" color="white">Paper</Link>
                </Box>

                <Divider orientation="vertical" height="auto" borderColor="gray.600" display={{ base: "none", md: "block" }} />

                {/* Third Column */}
                <Box flex="1" textAlign="center" padding="1rem">
                    <Link href="https://hashcoin.farm/promo" color="white">Promo</Link>
                    <br />
                    <Link href="https://hashcoin.farm/eco" color="white">Eco</Link>
                    <br />
                    <Text color="gray.400">#Tag</Text>
                </Box>
            </Flex>

            <Divider borderColor="gray.600" marginY="1rem" />

            {/* Social Media Links */}
            <Flex justifyContent="center">
                <SocialLink href="https://twitter.com/HashCoinFarm" icon={<FaTwitter size={24} color="#ffffff" />} />
                <SocialLink href="https://discord.gg/D55sWhNgcb" icon={<FaDiscord size={24} color="#ffffff" />} />
                <SocialLink href="https://t.me/ChainInside/524" icon={<FaTelegram size={24} color="#ffffff" />} />
                <SocialLink href="https://github.com/LookHookInfo" icon={<FaGithub size={24} color="#ffffff" />} />
            </Flex>
        </Box>
    );
};

const SocialLink: React.FC<{ href: string; icon: JSX.Element }> = ({ href, icon }) => (
    <Link href={href} mx={2} target="_blank" rel="noopener noreferrer">
        {icon}
    </Link>
);

export default Footer;
