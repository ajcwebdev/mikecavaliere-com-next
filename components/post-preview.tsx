import CoverImage from "./cover-image";
import Link from "next/link";
import { Heading, Text } from "@chakra-ui/react";
import { stripHtml } from "lib/utils/stripHtml";
import { More } from "lib/postRenderers";
import { CardContainer, CardBody } from "components/Card";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  // Strip HTML to prevent rehydration mismatch errors.
  // See: https://nextjs.org/docs/messages/react-hydration-error
  const cleanedExcerpt = stripHtml(excerpt).replace(/\[\&hellip;\]/, "...");
  const hasMoreTag = /\[\&hellip;\]/.test(excerpt);

  return (
    <CardContainer
      as="article"
      p={0}
      href={`/posts/${slug}`}
      justify="flex-start"
    >
      {coverImage && (
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      )}

      <CardBody>
        <Heading as="h2" size="lg">
          {title}
        </Heading>

        <Text dangerouslySetInnerHTML={{ __html: cleanedExcerpt }} />
        {hasMoreTag ? <More /> : null}
      </CardBody>
    </CardContainer>
  );
}
