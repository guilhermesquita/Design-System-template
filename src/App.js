import axios from "axios";
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import Card from "./Components/Card";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider>
      {users.map((user, index) => {
        return <Card key={index} user={user}/>
      })}
    </ChakraProvider>
  );
}
