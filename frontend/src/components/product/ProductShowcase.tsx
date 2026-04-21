import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import ProductFlexDisplay from "./ProductFlexDisplay";
import ProductGridDisplay from "./ProductGridDisplay";
import ProductListDisplay from "./ProductListDisplay";

function ProductShowcase() {
    const filterContext = useContext(FilterContext);
    if (!filterContext) return null;
    const { display } = filterContext;

    const items = [1, 2, 3, 4, 5];

    return (
        <>
            {display === "flex" && <ProductFlexDisplay items={items}/>}
            {display === "grid" && <ProductGridDisplay/>}
            {display === "list" && <ProductListDisplay/>}
        </>
    );
}

export default ProductShowcase;