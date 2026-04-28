import { Box } from "@mui/material";
import { useLayoutEffect, useRef } from "react";

type ProductImageProps = {
    image: string,
    isActive: boolean
}

function ProductImage({ image, isActive }: ProductImageProps) {
    const container = useRef<HTMLElement>(null!);

    useLayoutEffect(() => {
        if (isActive && container.current) {
            container.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
    }, [isActive]);

    return (
        <Box ref={container} className="cursor-pointer object-contain" bgcolor={"white"} height={"100%"} flex={"100%"} flexGrow={0} flexShrink={0} component={"img"} src={image} alt={image} />
    );
}

export default ProductImage;