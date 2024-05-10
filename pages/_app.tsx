import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <ChakraProvider>
        <NavBar />
        <div style={{ maxWidth: "90%", margin: "0 auto" }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
