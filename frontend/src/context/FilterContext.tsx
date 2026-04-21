import { createContext, type Dispatch, type SetStateAction } from "react";

export const FilterContext = createContext<{
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    display: "flex" | "grid" | "list",
    setDisplay: Dispatch<SetStateAction<"flex" | "grid" | "list">>
} | null>(null);