import { Search } from "@mui/icons-material";
import { IconButton, Input, Stack, Tooltip } from "@mui/material";

function Searchbar() {
    return (
        <Stack direction={"row"} justifyContent={"center"} width={"100%"}>
            <Input className="pl-2 pr-2 text-zinc-100! border-b border-b-zinc-100" disableUnderline fullWidth placeholder="Search"/>
            <Tooltip title={"Search"}>
                <IconButton className="text-zinc-100!">
                    <Search color="inherit"/>
                </IconButton>
            </Tooltip>
        </Stack>
    );
}

export default Searchbar;