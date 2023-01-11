import { createContext, useState } from "react";

type UserContextProviderType = {
  children: React.ReactNode;
};
export type UserType = {
  name: string;
  email: string;
};
// this type is created, because createContext value either be null or string value
type UserContextType = {
  user: UserType | null;
  setuser: React.Dispatch<React.SetStateAction<UserType | null>>;
};
export const UserContext = createContext<UserContextType | null>(null); // <UserContextType | null> means createContext value either be null or UserContextType

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setuser] = useState<UserType | null>(null);
  return (
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
};
