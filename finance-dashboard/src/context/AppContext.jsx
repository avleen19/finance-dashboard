import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const initialData = [
  { id: 1, date: "2026-04-01", amount: 1200, category: "Salary", type: "income" },
  { id: 2, date: "2026-04-02", amount: 300, category: "Food", type: "expense" },
  { id: 3, date: "2026-04-03", amount: 700, category: "Shopping", type: "expense" }
];

export const AppProvider = ({ children }) => {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("data")) || initialData;
  });

  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  // ADD
  const addItem = () => {
    setList([
      ...list,
      {
        id: Date.now(),
        date: "2026-04-05",
        amount: 400,
        category: "Food",
        type: "expense"
      }
    ]);
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const updateItem = (updatedItem) => {
    setList(
      list.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        list,
        role,
        setRole,
        search,
        setSearch,
        addItem,
        deleteItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);