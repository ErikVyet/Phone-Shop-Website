import { createContext, type Dispatch, type SetStateAction } from "react";

export const FilterContext = createContext<{
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    display: "flex" | "grid" | "list",
    setDisplay: Dispatch<SetStateAction<"flex" | "grid" | "list">>,
    brand: string | null,
    setBrand: Dispatch<SetStateAction<string | null>>,
    screens: string[],
    setScreens: Dispatch<SetStateAction<string[]>>,
    rams: string[],
    setRams: Dispatch<SetStateAction<string[]>>,
    storages: string[],
    setStorages: Dispatch<SetStateAction<string[]>>,
    prices: number[] | null,
    setPrices: Dispatch<SetStateAction<number[] | null>>,
} | null>(null);