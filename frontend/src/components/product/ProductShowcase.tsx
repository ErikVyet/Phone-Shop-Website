import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FilterContext } from "../../contexts/FilterContext";
import ProductFlexDisplay from "./ProductFlexDisplay";
import ProductGridDisplay from "./ProductGridDisplay";
import ProductListDisplay from "./ProductListDisplay";
import type { Phone } from "../../interfaces/Phone";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "../../pages/Loading";
import Error from "../../pages/Error";
import { ErrorType } from "../../enums/ErrorType";
import { Box, Typography } from "@mui/material";
import { ThemeContext } from "../../contexts/ThemeContext";

type FetchProps = {
    brand: string | null,
    screens: string[],
    rams: string[],
    storages: string[],
    prices: number[] | null,
    page: number
}

type ResponseProps = {
    content: Phone[],
    empty: boolean,
    first: boolean,
    last: boolean,
    number: number,
    totalElements: number,
    totalPages: number
}

async function fetchPhones({ brand, screens, rams, storages, prices, page }: FetchProps): Promise<ResponseProps> {
    const response = await fetch("http://localhost:8080/api/product/all", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({
            brand: brand,
            screens: screens,
            rams: rams,
            storages: storages,
            prices: prices,
            page: page
        })
    });
    return response.json();
}

function ProductShowcase() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const filterContext = useContext(FilterContext);
    if (!filterContext) return null;
    const { display, brand, screens, rams, storages, prices } = filterContext;

    const { ref, inView } = useInView({ threshold: 0.5 });
    const { data, isLoading, isError, error, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ['product', { brand, screens, rams, storages, prices }],
        queryFn: ({ pageParam = 0 }) => fetchPhones({ brand: brand, screens: screens, rams: rams, storages: storages, prices: prices, page: pageParam }),
        initialPageParam: 0,
        getNextPageParam: ({ last, number }) => last ? undefined : number + 1,
    });

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView]);

    if (isLoading) return <Loading/>
    if (isError) return <Error code={ErrorType.BadRequest} message={error.message}/>
    if (data === undefined) return <Error code={ErrorType.BadRequest} message={"Invalid data"}/>

    console.log(data);
    const products: Phone[] = data.pages.flatMap(page => page.content) ?? [];

    return (
        <>
            {display === "flex" && <ProductFlexDisplay items={products}/>}
            {display === "grid" && <ProductGridDisplay items={products}/>}
            {display === "list" && <ProductListDisplay items={products}/>}
            {isFetchingNextPage && <Loading/>}
            {!hasNextPage && (
                <Box textAlign={"center"} mt={2}>
                    <Typography className={`${theme === "light" ? 'text-zinc-500' : 'text-zinc-100'}`}>No more products to show.</Typography>
                </Box>
            )}
            <Box ref={ref}></Box>
        </>
    );
}

export default ProductShowcase;