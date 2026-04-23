import { Button, Container, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { Section } from "../../interfaces/Section";

type MarketplaceSectionProps = {
    content?: Section,
    ref?: React.Ref<HTMLDivElement>;
}

function MarketplaceSection({ ref, content }: MarketplaceSectionProps) {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;

    return (
        <Container ref={ref} className="h-screen" maxWidth="md">
            <Stack width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"} gap={2} textAlign={"center"}>
                <Typography className={`${theme === "light" ? 'text-zinc-800' : 'text-zinc-100'}`} variant="h3" width={"100%"}>{content?.title}</Typography>
                <Typography className={`${theme === "light" ? 'text-zinc-500' : 'text-zinc-400'}`} width={"70%"}>
                    {content?.content}
                </Typography>
                <Stack direction={"row"} gap={2} justifyContent={"center"}>
                    <Button variant="contained" className={`${theme === "light" ? 'bg-linear-to-r from-blue-500 to to-blue-400 text-zinc-100!' : 'bg-white! text-zinc-800!'}`}>
                        Start Selling
                    </Button>
                    <Button href="/product" variant="outlined" className={`${theme === "light" ? 'border-blue-500 text-blue-500! bg-white!' : 'border-zinc-100! text-zinc-100! bg-zinc-950!'} hover:opacity-90! duration-200! transition-all!`} draggable={false}>
                        Browse Marketplace
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}

export default MarketplaceSection;