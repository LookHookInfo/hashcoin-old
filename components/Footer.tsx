import React from 'react';
import { Flex, Link, Box } from "@chakra-ui/react";
import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <Flex justifyContent="space-between" alignItems="center" padding="1rem" backgroundColor="#01111f" color="#ffffff" width="100%" maxWidth="95%" margin="0 auto">
            <div>
                <p>
                    DEV
                    <Link href="https://lookhook.info/" target="_blank" rel="noopener noreferrer" color="#ffffff" textDecoration="underline" marginLeft="0.2rem">
                        LookHook
                    </Link>
                </p>
            </div>
            <Flex justifyContent="center" alignItems="center">
                <Link href="https://twitter.com/HashCoinFarm" mx={2} target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} color="#ffffff" />
                </Link>
                <Link href="https://discord.gg/D55sWhNgcb" mx={2} target="_blank" rel="noopener noreferrer">
                    <FaDiscord size={24} color="#ffffff" />
                </Link>
                <Link href="https://t.me/ChainInside/524" mx={2} target="_blank" rel="noopener noreferrer">
                    <FaTelegram size={24} color="#ffffff" />
                </Link>
                <Link href="https://github.com/LookHookInfo" mx={2} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} color="#ffffff" />
                </Link>
            </Flex>
            <Box display={{ base: "none", md: "block" }}>
                <a href="https://thirdweb.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                    ThirdWeb
                </a>
                <a>&nbsp;</a>
                <a href="/eco" style={{ color: "white" }}>
                    Eco
                </a>
            </Box>
        </Flex>
    );
};

export default Footer;
