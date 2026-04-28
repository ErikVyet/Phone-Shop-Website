import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputBase, Slide, Stack, Typography } from "@mui/material";
import FooterMenu, { type FooterMenuProps } from "./FooterMenu";
import { Send } from "@mui/icons-material";
import { forwardRef, useRef, useState, type ReactElement, type Ref } from "react";
import { useMutation } from "@tanstack/react-query";
import type { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(
    function Transition(props: TransitionProps & { children: ReactElement<any, any> }, ref: Ref<unknown>) { 
        return <Slide direction={"up"} ref={ref} {...props} />; 
    }
);

async function submitEmail(email: string): Promise<{ status: number, message: string }> {
    const response = await fetch("http://localhost:8080/api/email/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    })
    const data: Promise<{ status: number, message: string }> = await response.json();
    if (!response.ok) {
        throw new Error((await data).message || "Failed to submit email.");
    }
    return data;
}

function Footer() {
    const submitInput = useRef<HTMLInputElement>(null!);
    const [isOpen, setIsOpen] = useState(false);

    const { mutate, data, isError } = useMutation({
        mutationFn: (newEmail: string) => submitEmail(newEmail),
        onSuccess: () => setIsOpen(true),
        onError: () => setIsOpen(true) 
    });

    const handleSubmitEmail = () => {
        const email = submitInput.current.value.trim();
        if (email !== "") {
            mutate(email);
            submitInput.current.value = "";
        }
    }

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
                        <InputBase className="h-full text-sm! bg-white rounded-full pl-3 pr-7" type="email" placeholder="Enter your email here" inputRef={submitInput} fullWidth/>
                        <IconButton className="absolute! h-full top-0 right-0 p-0!" disableRipple onClick={handleSubmitEmail}>
                            <Send className="size-4/5!"/>
                        </IconButton>
                        <Dialog open={isOpen} onClose={() => setIsOpen(false)} slots={{ transition: Transition }} keepMounted disableScrollLock>
                            <DialogTitle>Notification</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    {data ? data.message : isError ? "Your submitted email is invalid." : "Submitting..."}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setIsOpen(false)}>
                                    <Typography>OK</Typography>
                                </Button>
                            </DialogActions>
                        </Dialog>
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