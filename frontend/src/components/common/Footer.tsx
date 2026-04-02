import { Box, Stack, Typography } from "@mui/material";
import FooterMenu, { type FooterMenuProps } from "./FooterMenu";

function Footer() {
    const linksFooterMenu: FooterMenuProps = {
        header: "Links",
        items: [
            { path: "/", text: "Home" },
            { path: "/playground", text: "Playground" },
            { path: "/product", text: "Product" },
            { path: "/community", text: "Community" },
            { path: "/about", text: "About" },
            { path: "/guide", text: "Guide" }
        ]
    }
    const socialsFooterMenu: FooterMenuProps = {
        header: "Socials",
        items: [
            { path: "/", text: "Facebook" },
            { path: "/", text: "Instagram" },
            { path: "/", text: "Twitter" }
        ]
    }
    const projectsFooterMenu: FooterMenuProps = {
        header: "Projects",
        items: [
            { path: "/", text: "Project 1" },
            { path: "/", text: "Project 2" },
            { path: "/", text: "Project 3" },
            { path: "/", text: "Project 4" }
        ]
    }
    return (
        <footer className="w-full h-80 bg-black">
            <Stack direction={"row"} className="w-full h-full text-zinc-100">
                <Box className="flex-3" alignContent={"center"} justifyItems={"center"}>
                    <img className="invert-100! size-1/2 object-contain justify-self-center" src="/src/assets/images/banner.png" draggable={false} />
                    <Typography className="text-sm! w-10/12">Your trusted destination for the latest smartphones, unbeatable deals, and expert insights.</Typography>
                </Box>
                <FooterMenu header={linksFooterMenu.header} items={linksFooterMenu.items} />
                <FooterMenu header={socialsFooterMenu.header} items={socialsFooterMenu.items} />
                <FooterMenu header={projectsFooterMenu.header} items={projectsFooterMenu.items} />
            </Stack>
        </footer>
    );
}

export default Footer;