import React from 'react';
import { Text, Card } from "@chakra-ui/react";
import { MediaRenderer, Web3Button, useActiveClaimCondition, useContract } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { TOOLS_ADDRESS } from "../const/addresses";
import { ethers } from "ethers";

type Props = {
    nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
    const { contract } = useContract(TOOLS_ADDRESS);
    const { data, isLoading, error } = useActiveClaimCondition(
        contract,
        nft.metadata.id,
    );

    if (error) {
        return <Text>Error: Unable to load data for this NFT.</Text>;
    }

    const formatUSDCPrice = (price: ethers.BigNumberish) => {
        return ethers.utils.formatUnits(price, 6);
    };

    return (
        <Card key={nft.metadata.id} overflow={"hidden"} boxShadow={"md"}>
            <MediaRenderer
                src={nft.metadata.image}
                height="100%"
                width="100%"
            />
            <Text fontSize={"2xl"} fontWeight={"bold"} my={5} textAlign={"center"}>{nft.metadata.name}</Text>
            {!isLoading && data ? (
                <Text textAlign={"center"} my={5}>Cost: {formatUSDCPrice(data?.price)}{" " + data?.currencyMetadata.symbol}</Text>
            ) : (
                <Text textAlign={"center"} my={5}>Loading...</Text>
            )}
            <Web3Button
                contractAddress={TOOLS_ADDRESS}
                action={(contract) => contract.erc1155.claim(nft.metadata.id, 1)}
                style={{ backgroundColor: 'gray', color: 'white' }}
            >
                Buy
            </Web3Button>
        </Card>
    );
};
