import { Providers } from "./providers";
import SiteOuterLayout from "@/layouts/SiteOuterLayout";
import { MaxWidthContainerLayout } from "@/layouts/MaxWidthContainerLayout";
import { fonts } from './fonts'


export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "@/lib/theme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
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
