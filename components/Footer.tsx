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
                <SocialLink href="https://twitter.com/HashCoinFarm" icon={<FaTwitter size={24} color="#ffffff" />} />
                <SocialLink href="https://discord.gg/D55sWhNgcb" icon={<FaDiscord size={24} color="#ffffff" />} />
                <SocialLink href="https://t.me/ChainInside/524" icon={<FaTelegram size={24} color="#ffffff" />} />
                <SocialLink href="https://github.com/LookHookInfo" icon={<FaGithub size={24} color="#ffffff" />} />
            </Flex>
            <Box display={{ base: "none", md: "block" }}>
                <PageLink href="https://thirdweb.com" text="ThirdWeb" />
                &nbsp;
                <PageLink href="/eco" text="Eco" targetSelf />
            </Box>
        </Flex>
    );
};

const SocialLink: React.FC<{ href: string; icon: JSX.Element }> = ({ href, icon }) => (
    <Link href={href} mx={2} target="_blank" rel="noopener noreferrer">
        {icon}
    </Link>
);

const PageLink: React.FC<{ href: string; text: string; targetSelf?: boolean }> = ({ href, text, targetSelf }) => (
    <Link href={href} style={{ color: "white" }} target={targetSelf ? "_self" : "_blank"} rel="noopener noreferrer">
        {text}
    </Link>
);

export default Footer;
