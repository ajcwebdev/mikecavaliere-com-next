import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../lib/theme";
import { getLayout as getSiteOuterLayout } from "layouts/SiteOuterLayout";
import { AppPropsWithLayout } from "lib/types";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Grab the layout if set; otherwise default to the default layout.
  const getLayout = Component.getLayout || getSiteOuterLayout;

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </ChakraProvider>
  );
}

export default MyApp;
