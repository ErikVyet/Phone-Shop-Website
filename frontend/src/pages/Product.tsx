import { Container, Stack } from "@mui/material";
import BrandHorizontalMenu from "../components/product/BrandHorizontalMenu";
import FilterSection from "../components/product/FilterSection";
import ProductShowcase from "../components/product/ProductShowcase";
import { useState } from "react";
import { FilterContext } from "../context/FilterContext";

function Product() {
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [display, setDisplay] = useState<"flex" | "grid" | "list">("flex");

    return (
        <FilterContext.Provider value={{ isOpen, setIsOpen, count, setCount, display, setDisplay }}>
            <Container className="min-h-screen max-h-max mt-4 mb-4 p-0!" component={Stack} alignItems={"center"} gap={2}>
                <BrandHorizontalMenu/>
                <FilterSection/>
                <ProductShowcase/>
            </Container>
        </FilterContext.Provider>
    )
}

export default Product;