import { Search } from "@mui/icons-material";
import { IconButton, Input, Stack, Tooltip } from "@mui/material";

function Searchbar() {
    return (
        <Stack direction={"row"} justifyContent={"center"} width={"100%"}>
            <Input className="pl-2 pr-2" fullWidth placeholder="Search"/>
            <Tooltip title={"Search"}>
                <IconButton>
                    <Search/>
                </IconButton>
            </Tooltip>
        </Stack>
    );
}

export default Searchbar;