import { Stack, Typography } from "@mui/material";
import type { Phone } from "../../interfaces/Phone";
import { Label, LocalMoviesOutlined, Smartphone, Storage } from "@mui/icons-material";

type ProductSpecsProps = {
    phone: Phone
}

function ProductSpecs({ phone }: ProductSpecsProps) {
    return (
        <Stack className="border-y border-zinc-300" direction={"row"} width={"90%"} flex={"15%"} flexGrow={0} flexShrink={0} flexWrap={"wrap"} alignItems={"center"} justifyContent={"evenly"} overflow={"hidden"} gap={2}>
            <Stack direction={"row"} gap={0.5} justifyContent={"center"} alignItems={"center"}>
                <Label className="scale-80 text-zinc-500"/>
                <Typography className="text-sm! text-zinc-500">Brand:</Typography>
                <Typography className="text-sm!" textTransform={"none"}>{phone.brand}</Typography>
            </Stack>
            <Stack direction={"row"} gap={0.5} justifyContent={"center"} alignItems={"center"}>
                <Smartphone className="scale-80 text-zinc-500"/>
                <Typography className="text-sm! text-zinc-500">Screen:</Typography>
                <Typography className="text-sm!">{phone.screen}'</Typography>
            </Stack>
            <Stack direction={"row"} gap={0.5} justifyContent={"center"} alignItems={"center"}>
                <LocalMoviesOutlined className="scale-80 rotate-90 text-zinc-500"/>
                <Typography className="text-sm! text-zinc-500">Ram:</Typography>
                <Typography className="text-sm!">{phone.ram}</Typography>
            </Stack>
            <Stack direction={"row"} gap={0.5} justifyContent={"center"} alignItems={"center"}>
                <Storage className="scale-80 text-zinc-500"/>
                <Typography className="text-sm! text-zinc-500">Storage:</Typography>
                <Typography className="text-sm!">{phone.storage}</Typography>
            </Stack>
        </Stack>
    );
}

export default ProductSpecs;