import { Box, Stack } from "@mui/material";
import ProductFlexCard from "./ProductFlexCard";

function ProductFlexDisplay({ items }: { items: number[]}) {
    return (
        <Stack className="rounded-md h-max!" direction={"row"} width={"100%"} bgcolor={"transparent"} flexWrap={"wrap"} justifyContent={"space-between"}>
            {items.map((item, index) =>
                <ProductFlexCard key={item} index={index}/>
            )}
            <Box flex={1} flexBasis={"32%"} flexGrow={0} flexShrink={1}/>
        </Stack>
    );
}

export default ProductFlexDisplay;