import { Grid } from "@mui/material";
import ProductGridCard from "./ProductGridCard";
import type { Phone } from "../../interfaces/Phone";

function ProductGridDisplay({ items }: { items: Phone[] }) {
    return (
        <Grid container width={"100%"} spacing={2}>
            {items.map((item, index) =>
                <Grid className="h-100" size={3} key={item.id}>
                    <ProductGridCard index={index} phone={item}/>
                </Grid>
            )}
        </Grid>
    );
}

export default ProductGridDisplay;