import { SimpleGrid, Box, Text, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const CoffeeList = () => {
  const { loading, coffeeList } = useSelector((state) => state.coffee);

  if (loading) return <Spinner size="xl" />;

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="20px">
      {coffeeList.map((item) => (
        <Box key={item.id} border="1px solid #ccc" p={4} borderRadius="md">
          <Text fontWeight="bold">{item.name}</Text>
          <Text>Price: ₹{item.price}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};
