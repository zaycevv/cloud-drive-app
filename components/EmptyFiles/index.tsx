import { Container, Flex, Text } from "@mantine/core";
import { MoodEmpty } from "tabler-icons-react";

const EmptyFiles: React.FC = () => {
  return (
    <Container size="xs" sx={{ marginTop: "100px" }}>
      <Flex align="center" direction="column" gap="xs">
        <MoodEmpty size="5rem" strokeWidth={1} color={"black"} />
        <Text size="xl" weight="bold">
          Your cloud is empty
        </Text>
      </Flex>
    </Container>
  );
};

export default EmptyFiles;
