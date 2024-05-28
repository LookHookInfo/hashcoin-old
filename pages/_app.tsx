import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Base } from "@thirdweb-dev/chains";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID} 
    activeChain={Base}>
      <ChakraProvider>
        <NavBar />
        <div style={{ maxWidth: "95%", margin: "0 auto" }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
