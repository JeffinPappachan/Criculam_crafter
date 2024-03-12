import { createContext, useState } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [profile, setProfile] = useState({ name: "", college: "", years: "" });
  return (
    <DataContext.Provider value={{ profile, setProfile }}>
      {children}
    </DataContext.Provider>
  );
};