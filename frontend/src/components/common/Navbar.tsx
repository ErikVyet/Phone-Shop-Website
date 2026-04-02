import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip } from "@mui/material";
import { Person, Edit, Logout, ShoppingBasket } from "@mui/icons-material";
import { useState } from "react";
import Searchbar from "./Searchbar";

function Navbar() {
    const [anchorElPerson, setAnchorElPerson] = useState<HTMLElement | null>(null);
    const handleOpenPersonMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElPerson(event.currentTarget);
    }
    const handleClosePersonMenu = () => {
        setAnchorElPerson(null);
    }

    return (
        <AppBar position="static" className="w-full! h-18! justify-center place-items-center bg-transparent!">
            <Stack direction={"row"} className="w-full h-full bg-white! flex">
                <img src="/src/assets/images/banner.png" className="object-contain flex-auto!" draggable={false}/>
                <Toolbar className="flex-6! h-full! justify-evenly">
                    <Button className="text-zinc-600!" color="inherit" href="/" draggable={false}>Home</Button>
                    <Button className="text-zinc-600!" color="inherit" href="/product" draggable={false}>Product</Button>
                    <Button className="text-zinc-600!" color="inherit" href="/community" draggable={false}>Community</Button>
                    <Button className="text-zinc-600!" color="inherit" href="/about" draggable={false}>About</Button>
                    <Button className="text-zinc-600!" color="inherit" href="/guide" draggable={false}>Guide</Button>
                </Toolbar>
                <Box className="flex-4! place-content-center justify-items-center">
                    <Searchbar />
                </Box>
                <Box className="flex-2 flex items-center justify-evenly">
                    <Tooltip title={"Cart"}>
                        <IconButton className="h-fit">
                            <ShoppingBasket />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={"Setting"}>
                        <IconButton className="h-fit" onClick={handleOpenPersonMenu}>
                            <Person />
                        </IconButton>
                    </Tooltip>
                    <Menu open={Boolean(anchorElPerson)} anchorEl={anchorElPerson} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} onClose={handleClosePersonMenu} disableScrollLock>
                        <MenuItem className="text-sm! gap-2"><Edit className="size-5!" /> Personalize</MenuItem>
                        <MenuItem className="text-sm! gap-2"><Logout className="size-5!" />Logout</MenuItem>
                    </Menu>
                </Box>
            </Stack>
        </AppBar>
    );
}

export default Navbar;