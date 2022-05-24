import { Container } from "@chakra-ui/react";

export function MaxWidthContainer({ children }) {
  return (
    <Container
      my={10}
      p={10}
      maxW={{
        base: "100%",
        md: "90%",
        lg: "75%",
      }}
      flex={1}
      flexDirection="column"
    >
      {children}
    </Container>
  );
}