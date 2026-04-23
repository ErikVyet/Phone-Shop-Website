import { List, ListItem } from "@mui/material";
import ProductListCard from "./ProductListCard";
import type { Phone } from "../../interfaces/Phone";

function ProductListDisplay({ items }: { items: Phone[] }) {
    return (
        <List className="w-full" >
            {items.map((item) =>
                <ListItem className="w-full h-100 mb-4" key={item.id}>
                    <ProductListCard phone={item}/>
                </ListItem>
            )}
        </List>
    );
}

export default ProductListDisplay;