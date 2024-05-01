import { Providers } from "./providers";
import SiteOuterLayout from "@/layouts/SiteOuterLayout";
import { MaxWidthContainerLayout } from "@/layouts/MaxWidthContainerLayout";

import "@fontsource/barlow/400.css";
import "@fontsource/barlow/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "@/lib/theme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.initialColorMode} />
        <Providers>
          <SiteOuterLayout>
            <MaxWidthContainerLayout>{children}</MaxWidthContainerLayout>
          </SiteOuterLayout>
        </Providers>
      </body>
    </html>
  );
}
