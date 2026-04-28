import { Box, IconButton, InputBase, Stack, Typography } from "@mui/material";
import FooterMenu, { type FooterMenuProps } from "./FooterMenu";
import { Send } from "@mui/icons-material";

function Footer() {
    const linksFooterMenu: FooterMenuProps = {
        header: "Links",
        items: [
            { path: "/", text: "Home" },
            { path: "/playground", text: "Playground" },
            { path: "/shop", text: "Shop" },
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
            <Stack direction={"row"} className="text-zinc-100" width={"100%"} height={"100%"}>
                <Stack flex={3} justifyContent={"center"} alignItems={"center"} gap={1}>
                    <img className="invert-100! size-2/5 object-contain justify-self-center" src="/src/assets/images/banner.png" draggable={false} />
                    <Typography className="text-sm! w-5/6">Your trusted destination for the latest smartphones, unbeatable deals, and expert insights.</Typography>
                    <Typography className="text-sm! w-5/6">Subscribe for future updates.</Typography>
                    <Box className="w-5/6" position={"relative"}>
                        <InputBase className="h-full text-sm! bg-white rounded-full pl-3 pr-7" type="email" placeholder="Enter your email here" fullWidth/>
                        <IconButton className="absolute! h-full top-0 right-0 p-0!" disableRipple>
                            <Send className="size-4/5!"/>
                        </IconButton>
                    </Box>
                </Stack>
                <FooterMenu header={linksFooterMenu.header} items={linksFooterMenu.items} />
                <FooterMenu header={socialsFooterMenu.header} items={socialsFooterMenu.items} />
                <FooterMenu header={projectsFooterMenu.header} items={projectsFooterMenu.items} />
            </Stack>
        </footer>
    );
}

export default Footer;