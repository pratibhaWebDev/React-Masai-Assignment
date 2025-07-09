import {
    Box, Text, Heading, Button, Stack, Avatar, Tag, useColorModeValue
  } from "@chakra-ui/react";
  
  const SocialProfileCard = () => {
    const bg = useColorModeValue("white", "gray.800");
  
    return (
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        p={6}
        bg={bg}
        textAlign="center"
        m="auto"
      >
        <Avatar
          size="xl"
          src="https://bit.ly/dan-abramov"
          alt="Lindsey James"
          mb={4}
          mx="auto"
        />
        <Heading fontSize="lg">Lindsey James</Heading>
        <Text fontSize="sm" color="gray.500">@lindsey_jam3s</Text>
  
        <Text mt={3} fontSize="sm">
          Actress 🎬 | Musician 🎶 | Songwriter ✍️ | Artist 🎨
        </Text>
  
        <Stack direction="row" justify="center" mt={4} spacing={2}>
          {["#ART", "#PHOTOGRAPHY", "#MUSIC"].map(tag => (
            <Tag key={tag} variant="solid" colorScheme="purple">
              {tag}
            </Tag>
          ))}
        </Stack>
  
        <Stack direction="row" spacing={4} mt={6} justify="center">
          <Button colorScheme="purple" variant="outline">
            Message
          </Button>
          <Button colorScheme="purple">Follow</Button>
        </Stack>
      </Box>
    );
  };
  
  export default SocialProfileCard;
  