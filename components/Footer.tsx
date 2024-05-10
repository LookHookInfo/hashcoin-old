import React from 'react';
import { Flex, Link } from "@chakra-ui/react";
import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#01111f",
            color: "#ffffff",
            width: "100%", // Растянуть от края до края экрана
            maxWidth: "95%", // Установить максимальную ширину на 90% экрана
            margin: "0 auto", // Центрировать по горизонтали
        }}>
            <div>
                <p>
                    DEV
                    <Link
                        href="https://lookhook.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#ffffff", textDecoration: "underline", marginLeft: "0.2rem" }}
                    >
                        LookHook
                    </Link>
                </p>
            </div>
            <div>
                <Flex justifyContent="center" alignItems="center">
                    <Link href={"https://twitter.com/HashCoinFarm"} mx={2} target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} color="#ffffff" />
                    </Link>
                    <Link href={"https://discord.gg/D55sWhNgcb"} mx={2} target="_blank" rel="noopener noreferrer">
                        <FaDiscord size={24} color="#ffffff" />
                    </Link>
                    <Link href={"https://t.me/ChainInside/524"} mx={2} target="_blank" rel="noopener noreferrer">
                        <FaTelegram size={24} color="#ffffff" />
                    </Link>
                    <Link href={"https://github.com/LookHookInfo"} mx={2} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} color="#ffffff" />
                    </Link>
                </Flex>
            </div>
            <div>
                <a href="https://thirdweb.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                    ThirdWeb
                </a>
            </div>
        </div>
    );
};

export default Footer;
