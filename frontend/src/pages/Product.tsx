import { useParams } from "react-router-dom";
import type { Phone } from "../interfaces/Phone";
import { Container, Stack } from "@mui/material";
import ProductImageSelector from "../components/product/ProductImageSelector";
import { useState } from "react";
import ProductImageSlider from "../components/product/ProductImageSlider";
import ProductDetailPanel from "../components/product/ProductDetailPanel";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import Error from "./Error";
import { ErrorType } from "../enums/ErrorType";
import ProductReviewSection from "../components/product/ProductReviewSection";

async function fetchPhone(id: string): Promise<Phone> {
    const response = await fetch(`http://localhost:8080/api/product/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    return response.json();
}

function Product() {
    const { id } = useParams();
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["phone", id],
        queryFn: () => fetchPhone(id!)
    });

    if (isLoading) return <Loading />;
    if (isError) return <Error code={ErrorType.BadRequest} message={error.message} />
    if (data == null) return <Error code={ErrorType.NotFound} message={"Phone not found"} />

    const images = [data.image];
    
    return (
        <Container className="min-h-screen w-full p-0!" maxWidth={false}>
            <Stack className="min-h-screen h-screen" direction={"row"} width={"100%"} alignItems={"center"}>
                <ProductImageSelector images={images} activeImageIndex={activeImageIndex} setActiveImageIndex={setActiveImageIndex} />
                <ProductImageSlider images={images} activeImageIndex={activeImageIndex} setActiveImageIndex={setActiveImageIndex} />
                <ProductDetailPanel phone={data}/>
            </Stack>
            <ProductReviewSection header={data.name} />
        </Container>
    );
}

export default Product;