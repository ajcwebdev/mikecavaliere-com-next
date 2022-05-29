import { Box, Flex, Text } from "@chakra-ui/react";

import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
  slug,
}) {
  return (
    <>
      <PostTitle mb={5}>{title}</PostTitle>

      <CoverImage slug={slug} title={title} coverImage={coverImage} />

      <Flex direction="row" mb={5}>
        <Avatar author={author} />

        <Box>
          <Text fontSize="sm">
            <Date dateString={date} />
          </Text>
          <Categories categories={categories} />
        </Box>
      </Flex>
    </>
  );
}
