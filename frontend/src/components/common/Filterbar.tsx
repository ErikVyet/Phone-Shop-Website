import { FilterAlt } from "@mui/icons-material";
import { IconButton, Input, Stack, Tooltip } from "@mui/material";

function Filterbar() {
    return (
        <Stack direction={"row"} justifyContent={"center"} width={"100%"}>
            <Input className="px-2" fullWidth placeholder="Filter"/>
            <Tooltip title={"Filter"}>
                <IconButton>
                    <FilterAlt/>
                </IconButton>
            </Tooltip>
        </Stack>
    );
}

export default Filterbar;