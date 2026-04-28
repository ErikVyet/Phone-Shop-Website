import { Grid } from "@mui/material";
import ShopGridCard from "./ShopGridCard";
import type { Phone } from "../../interfaces/Phone";

function ShopGridDisplay({ items }: { items: Phone[] }) {
    return (
        <Grid container width={"100%"} spacing={2}>
            {items.map((item, index) =>
                <Grid className="h-100" size={3} key={item.id}>
                    <ShopGridCard index={index} phone={item}/>
                </Grid>
            )}
        </Grid>
    );
}

export default ShopGridDisplay;