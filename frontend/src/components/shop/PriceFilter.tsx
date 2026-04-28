import { List, ListItem, ListItemText, Slider, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useContext, useEffect, useState, type SyntheticEvent } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../pages/Loading";
import Error from "../../pages/Error";
import { ErrorType } from "../../enums/ErrorType";

async function fetchPriceRange(): Promise<number[]> {
    const response = await fetch("http://localhost:8080/api/product/price-range", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        mode: "cors"
    });
    return response.json();
}

function PriceFilter() {
    const filterContext = useContext(FilterContext);
    if (!filterContext) return null;
    const { isOpen, setPrices } = filterContext;

    const [sliderPrices, setSliderPrices] = useState<number[]>([0, 30000000]);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["priceRange"],
        queryFn: fetchPriceRange,
        retry: false,
    });

    useEffect(() => {
        if (data) {
            setSliderPrices(data);
            setPrices(data);
        }
    }, [data]);

    if (isLoading) return <Loading/>;
    if (isError) return <Error code={ErrorType.InternalServerError} message={error.message} />
    if (data === undefined) return <Error code={ErrorType.InternalServerError} message={"Failed to fetch price range"}/>
    
    const handleSliderChange = (_event: Event, values: number[]) => setSliderPrices(values);
    const handleSliderChangeCommitted = (_event: SyntheticEvent | Event, values: number[]) => setPrices(values);

    const currencyFormatter = new Intl.NumberFormat(
        "vi-VN",
        { style: "currency", currency: "VND" }
    );

    return (
        <List className="flex-1 shrink-0 h-full" component={motion.ul} animate={{ opacity: isOpen ? 1 : 0 }} transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}>
            <ListItemText>
                <Typography className="text-zinc-500 text-sm! py-1" textTransform={"uppercase"} letterSpacing={1.5}>Filter By Price</Typography>
            </ListItemText>
            <ListItem>
                <Slider className="text-zinc-700!" value={sliderPrices} min={data[0]} max={data[1]} step={100000} size="small" disableSwap onChange={handleSliderChange} onChangeCommitted={handleSliderChangeCommitted}/>
            </ListItem>
            <ListItem>
                <Stack direction={"row"} width={"50%"} height={"100%"} gap={0.5}>
                    <Typography className="text-xs! text-zinc-500" height={"100%"} flexGrow={0} flexShrink={0} textAlign={"center"}>Min Price: </Typography>
                    <Typography className="text-xs! text-zinc-700" height={"100%"} flexGrow={0} flexShrink={0} textAlign={"left"}>{currencyFormatter.format(sliderPrices[0])}</Typography>
                </Stack>
                <Stack direction={"row"} width={"50%"} height={"100%"} gap={0.5}>
                    <Typography className="text-xs! text-zinc-500" height={"100%"} flexGrow={0} flexShrink={0} textAlign={"center"}>Max Price: </Typography>
                    <Typography className="text-xs! text-zinc-700" height={"100%"} flexGrow={0} flexShrink={0} textAlign={"left"}>{currencyFormatter.format(sliderPrices[1])}</Typography>
                </Stack>
            </ListItem>
        </List>
    );
}

export default PriceFilter;