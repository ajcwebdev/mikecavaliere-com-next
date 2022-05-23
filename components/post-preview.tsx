import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { Heading, Text } from "@chakra-ui/react";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>

      <Link href={`/posts/${slug}`}>
        <Heading as="h2" size="lg">
          {title}
        </Heading>
      </Link>

      <Text dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  );
}
