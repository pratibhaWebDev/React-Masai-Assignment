import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCoffee } from "./redux/actions/coffeeActions";
import { Sidebar } from "./components/Sidebar";
import { CoffeeList } from "./components/CoffeeList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoffee());
  }, [dispatch]);

  return (
    <>
      <Flex>
      <Sidebar />
      <CoffeeList />
    </Flex>
    </>
  )
}

export default App
