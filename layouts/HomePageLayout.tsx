import { MaxWidthContainer } from "components/MaxWidthContainer";
import { getLayout as getSiteLayout } from "layouts/SiteOuterLayout";

export const HomePageLayout = ({ children }) => (
  <MaxWidthContainer>{children}</MaxWidthContainer>
);

export const getLayout = (page) =>
  getSiteLayout(<HomePageLayout>{page}</HomePageLayout>);
