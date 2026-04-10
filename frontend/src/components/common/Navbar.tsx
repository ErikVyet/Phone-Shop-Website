import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip } from "@mui/material";
import { Person, Edit, Logout, ShoppingBasket, LightMode, DarkMode } from "@mui/icons-material";
import { useContext, useState } from "react";
import Searchbar from "./Searchbar";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme, setTheme } = context;
    const handleToggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const [anchorElPerson, setAnchorElPerson] = useState<HTMLElement | null>(null);
    const handleOpenPersonMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElPerson(event.currentTarget);
    }
    const handleClosePersonMenu = () => {
        setAnchorElPerson(null);
    }

    return (
        <AppBar position="static" className="w-full! h-18! justify-center place-items-center bg-transparent!">
            <Stack direction={"row"} className={`${theme === "light" ? 'bg-linear-to-bl from-blue-500 to-blue-400' : 'bg-white'}`} width={"100%"} height={"100%"}>
                <img src="/src/assets/images/banner.png" className="object-contain flex-auto!" draggable={false}/>
                <Toolbar className={`flex-5! h-full! justify-evenly ${theme === "light" ? 'text-zinc-100' : 'text-zinc-500'}`}>
                    <Button color="inherit" href="/" draggable={false}>Home</Button>
                    <Button color="inherit" href="/product" draggable={false}>Product</Button>
                    <Button color="inherit" href="/community" draggable={false}>Community</Button>
                    <Button color="inherit" href="/about" draggable={false}>About</Button>
                    <Button color="inherit" href="/guide" draggable={false}>Guide</Button>
                </Toolbar>
                <Box className="flex-4! place-content-center" justifyItems={"center"}>
                    <Searchbar />
                </Box>
                <Stack className="flex-3" direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
                    <Tooltip title={"Toggle Theme"}>
                        <IconButton className="h-fit" color="inherit" onClick={handleToggleTheme}>
                            {theme === "light" ? <LightMode className="text-zinc-100!"/> : <DarkMode className="text-zinc-500!"/>}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={"Cart"}>
                        <IconButton className="h-fit" color="inherit">
                            <ShoppingBasket className={`${theme === "light" ? 'text-zinc-100!' : 'text-zinc-500!'}`} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={"Setting"}>
                        <IconButton className="h-fit" color="inherit" onClick={handleOpenPersonMenu}>
                            <Person className={`${theme === "light" ? 'text-zinc-100!' : 'text-zinc-500!'}`} />
                        </IconButton>
                    </Tooltip>
                    <Menu open={Boolean(anchorElPerson)} anchorEl={anchorElPerson} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} onClose={handleClosePersonMenu} disableScrollLock>
                        <MenuItem className="text-sm! gap-2"><Edit className="size-5!" /> Personalize</MenuItem>
                        <MenuItem className="text-sm! gap-2"><Logout className="size-5!" />Logout</MenuItem>
                    </Menu>
                </Stack>
            </Stack>
        </AppBar>
    );
}

export default Navbar;