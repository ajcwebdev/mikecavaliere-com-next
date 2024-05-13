import { Providers } from "./providers";
import SiteOuterLayout from "@/layouts/SiteOuterLayout";
import { MaxWidthContainerLayout } from "@/layouts/MaxWidthContainerLayout";
import { fonts } from './fonts'


export const metadata = {
  metadataBase: new URL('https://mikecavaliere.com'),
  title: "Mike Cavaliere: software engineer, presenter, author.",
  description: "The personal website of Mike Cavaliere, software engineer. Here you can find my conference talks, projects, articles and other things I've created.",
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
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
