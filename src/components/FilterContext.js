import { createContext, useMemo, useState } from "react";

export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("default");
  const value = useMemo(() => ({ filter, setFilter }), [filter, setFilter]);

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
