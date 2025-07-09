import { VStack, RadioGroup, Radio, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getCoffee } from "../redux/actions/coffeeActions";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    const sortParam = `?sort=price&order=${value}`;
    dispatch(getCoffee(sortParam));
  };

  return (
    <VStack align="start" p={4}>
      <Heading size="md">Sort by Price</Heading>
      <RadioGroup onChange={handleChange}>
        <Radio value="asc">Low to High</Radio>
        <Radio value="desc">High to Low</Radio>
      </RadioGroup>
    </VStack>
  );
};
