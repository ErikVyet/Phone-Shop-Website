import { Box, Stack } from "@mui/material";
import ShopFlexCard from "./ShopFlexCard";
import type { Phone } from "../../interfaces/Phone";

function ShopFlexDisplay({ items }: { items: Phone[]}) {
    return (
        <Stack className="rounded-md h-max!" direction={"row"} width={"100%"} bgcolor={"transparent"} flexWrap={"wrap"} justifyContent={"space-between"}>
            {items.map((item, index) =>
                <ShopFlexCard key={item.id} phone={item} index={index}/>
            )}
            <Box flex={1} flexBasis={"32%"} flexGrow={0} flexShrink={1}/>
        </Stack>
    );
}

export default ShopFlexDisplay;