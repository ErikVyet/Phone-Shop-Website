import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar } from "@mui/material";
import { Person, Edit, Logout } from "@mui/icons-material";
import { useState } from "react";

function Navbar() {
    const [anchorElPerson, setAnchorElPerson] = useState<HTMLElement | null>(null);
    const handleOpenPersonMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElPerson(event.currentTarget);
    }
    const handleClosePersonMenu = () => {
        setAnchorElPerson(null);
    }

    return (
        <AppBar position="fixed" className="w-full! h-25! justify-center place-items-center bg-transparent! shadow-none!">
            <Stack direction={"row"} className="w-11/12 h-8/12 bg-white! rounded-md flex">
                <img src="/src/assets/images/banner.png" className="object-contain flex-auto"/>
                <Toolbar className="flex-8! h-full! justify-evenly">
                    <Button className="text-zinc-600!" color="inherit" href="/">Home</Button>
                    <Button className="text-zinc-600!" color="inherit" href="/product">Product</Button>
                    <Button className="text-zinc-600!" color="inherit" href="/download">Download</Button>
                    <Button className="text-zinc-600!" color="inherit" href="/community">Community</Button>
                    <Button className="text-zinc-600!" color="inherit" href="/about">About</Button>
                    <Button className="text-zinc-600!" color="inherit" href="/guide">Guide</Button>
                </Toolbar>
                <Box className="flex-3">
                    
                </Box>
                <Box className="flex-1 place-content-center text-center">
                    <IconButton onClick={handleOpenPersonMenu}>
                        <Person/>
                    </IconButton>
                    <Menu open={Boolean(anchorElPerson)} anchorEl={anchorElPerson} anchorOrigin={{vertical: "bottom", horizontal: "center"}} onClose={handleClosePersonMenu} disableScrollLock>
                        <MenuItem className="text-sm! gap-2"><Edit className="size-5!"/> Personalize</MenuItem>
                        <MenuItem className="text-sm! gap-2"><Logout className="size-5!"/>Logout</MenuItem>
                    </Menu>
                </Box>
            </Stack>
        </AppBar>
    );
}

export default Navbar;