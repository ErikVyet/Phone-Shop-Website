import { Container, Stack } from "@mui/material";
import BrandHorizontalMenu from "../components/shop/BrandHorizontalMenu";
import FilterSection from "../components/shop/FilterSection";
import ShopShowcase from "../components/shop/ShopShowcase";
import { useState } from "react";
import { FilterContext } from "../contexts/FilterContext";

function Shop() {
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [display, setDisplay] = useState<"flex" | "grid" | "list">("flex");
    const [brand, setBrand] = useState<string | null>(null);
    const [screens, setScreens] = useState<string[]>([]);
    const [rams, setRams] = useState<string[]>([]);
    const [storages, setStorages] = useState<string[]>([]);
    const [prices, setPrices] = useState<number[]>([0, 30000000]);

    return (
        <FilterContext.Provider value={{ isOpen, setIsOpen, count, setCount, display, setDisplay, brand, setBrand, screens, setScreens, rams, setRams, storages, setStorages, prices, setPrices }}>
            <Container className="min-h-screen max-h-max mt-4 mb-4 p-0!" component={Stack} alignItems={"center"} gap={2}>
                <BrandHorizontalMenu/>
                <FilterSection/>
                <ShopShowcase/>
            </Container>
        </FilterContext.Provider>
    )
}

export default Shop;