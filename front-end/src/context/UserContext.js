import { createContext, useState} from "react";

export const UserContext = createContext();

export function UserProvider({children}) {
  const [devs, setDevs] = useState([]);

  function handleAddDev(dev) {
    console.log(dev);
    setDevs((prevState) => (
      [...prevState, dev]
    ))
  }

  return (
    <UserContext.Provider value={{devs, handleAddDev}}>
      {children}
    </UserContext.Provider>
  )
}