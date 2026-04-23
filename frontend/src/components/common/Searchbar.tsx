import { Search } from "@mui/icons-material";
import { IconButton, Input, Stack, Tooltip } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Searchbar() {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;

    return (
        <Stack direction={"row"} justifyContent={"center"} width={"100%"}>
            <Input className={`pl-2 pr-2 ${theme === "light" ? 'text-zinc-100! border-b-zinc-100' : 'text-zinc-700!'} border-b`} disableUnderline fullWidth placeholder="Search"/>
            <Tooltip title={"Search"}>
                <IconButton className={`${theme === "light" ? 'text-zinc-100!' : 'text-zinc-500!'}`} color="inherit">
                    <Search color="inherit"/>
                </IconButton>
            </Tooltip>
        </Stack>
    );
}

export default Searchbar;