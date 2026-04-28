import { List, ListItem } from "@mui/material";
import ShopListCard from "./ShopListCard";
import type { Phone } from "../../interfaces/Phone";

function ShopListDisplay({ items }: { items: Phone[] }) {
    return (
        <List className="w-full" >
            {items.map((item) =>
                <ListItem className="w-full h-100 mb-4" key={item.id}>
                    <ShopListCard phone={item}/>
                </ListItem>
            )}
        </List>
    );
}

export default ShopListDisplay;