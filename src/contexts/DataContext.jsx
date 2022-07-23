import { createContext, useState } from "react";

export const DataContext = createContext();

const dataFixed = {
  nombre: "",
  photo: "",
  correo: "",
};
export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(dataFixed);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
