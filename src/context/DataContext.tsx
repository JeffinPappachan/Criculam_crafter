import { createContext, useState } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: "",
    college: "",
    dob: "",
    years: "",
    gender: "",
    religion: "",
    CommunityCategory: "",
    father: "",
    mother: "",
    guardian: "",
    aadhar: "",
    phno: "",
    dayscholarhostel: "",
    address: "",
    pincode: "",
  });
  return (
    <DataContext.Provider value={{ profile, setProfile }}>
      {children}
    </DataContext.Provider>
  );
};
