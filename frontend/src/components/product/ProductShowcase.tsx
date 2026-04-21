import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import ProductFlexDisplay from "./ProductFlexDisplay";
import ProductGridDisplay from "./ProductGridDisplay";
import ProductListDisplay from "./ProductListDisplay";

function ProductShowcase() {
    const filterContext = useContext(FilterContext);
    if (!filterContext) return null;
    const { display } = filterContext;

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            {display === "flex" && <ProductFlexDisplay items={items}/>}
            {display === "grid" && <ProductGridDisplay items={items}/>}
            {display === "list" && <ProductListDisplay items={items}/>}
        </>
    );
}

export default ProductShowcase;