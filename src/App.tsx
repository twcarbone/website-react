import { ChakraProvider } from "@chakra-ui/react";

import Register from "./components/Register";

function App() {
  return (
    <ChakraProvider>
      <Register />
    </ChakraProvider>
  );
}

export default App;
