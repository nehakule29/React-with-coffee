import { createContext, use, useContext } from "react";

export const ToDoContext = createContext({});

export const useToDo = useContext(createContext);

export const Provider = ToDoContext.Provider()

