import { createContext, useState} from "react";

export const UserContext = createContext();

export function UserProvider({children}) {
  const [devs, setDevs] = useState([]);

  return (
    <UserContext.Provider value={{devs, setDevs}}>
      {children}
    </UserContext.Provider>
  )
}