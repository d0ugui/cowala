import { createContext, useState} from "react";

export const UserContext = createContext();

export function UserProvider({children}) {
  const [devs, setDevs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <UserContext.Provider value={{devs, setDevs, isLoading, setIsLoading}}>
      {children}
    </UserContext.Provider>
  )
}