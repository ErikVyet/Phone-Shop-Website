import { List, ListItem, ListItemText, Slider, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useContext, useState } from "react";
import { FilterContext } from "../../contexts/FilterContext";

function PriceFilter() {
    const filterContext = useContext(FilterContext);
    if (!filterContext) return null;
    const { isOpen } = filterContext;

    const [prices, setPrices] = useState([0, 1000]);
    const handleSliderChange = (_event: Event, values: number[]) => {
        setPrices(values);
    };

    return (
        <List className="flex-1 shrink-0 h-full" component={motion.ul} animate={{ opacity: isOpen ? 1 : 0 }} transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}>
            <ListItemText>
                <Typography className="text-zinc-500 text-sm! py-1" textTransform={"uppercase"} letterSpacing={1.5}>Filter By Price</Typography>
            </ListItemText>
            <ListItem>
                <Slider className="text-zinc-700!" value={prices} min={0} max={1000} size="small" disableSwap onChange={handleSliderChange}/>
            </ListItem>
            <ListItem>
                <Stack direction={"row"} width={"50%"} height={"100%"}>
                    <Typography className="text-sm! text-zinc-500" flex={"50%"} height={"100%"} flexGrow={0} flexShrink={0} textAlign={"center"}>Min Price: </Typography>
                    <Typography className="text-sm! text-zinc-700" flex={"50%"} height={"100%"} flexGrow={0} flexShrink={0} textAlign={"left"}>{prices[0]}$</Typography>
                </Stack>
                <Stack direction={"row"} width={"50%"} height={"100%"}>
                    <Typography className="text-sm! text-zinc-500" flex={"50%"} height={"100%"} flexGrow={0} flexShrink={0} textAlign={"center"}>Max Price: </Typography>
                    <Typography className="text-sm! text-zinc-700" flex={"50%"} height={"100%"} flexGrow={0} flexShrink={0} textAlign={"left"}>{prices[1]}$</Typography>
                </Stack>
            </ListItem>
        </List>
    );
}

export default PriceFilter;