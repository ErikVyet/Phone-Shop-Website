import { Grid } from "@mui/material";
import ProductGridCard from "./ProductGridCard";

function ProductGridDisplay({ items }: { items: number[] }) {
    return (
        <Grid container width={"100%"} spacing={2}>
            {items.map((item, index) =>
                <Grid className="h-100" size={3} key={item}>
                    <ProductGridCard index={index}/>
                </Grid>
            )}
        </Grid>
    );
}

export default ProductGridDisplay;