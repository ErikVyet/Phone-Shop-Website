import { Search } from "@mui/icons-material";
import { IconButton, Input, List, ListItemButton, ListItemText, Popover, Stack, Tooltip, Typography } from "@mui/material";
import { useContext, useState, type ChangeEvent } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { Phone } from "../../interfaces/Phone";
import { useQuery } from "@tanstack/react-query";
import Error from "../../pages/Error";
import { ErrorType } from "../../enums/ErrorType";

async function fetchAll(): Promise<Phone[]> {
    const response = await fetch(`http://localhost:8080/api/product/all`, {
        method: "GET",
        headers: { "Content-Type" : "application/json" }
    });
    return response.json();
}

function Searchbar() {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;

    const [anchorEl, setAnchorEl] = useState<null | HTMLInputElement>(null);
    const [searchInput, setSearchInput] = useState("");

    const { data, isError, error } = useQuery({
        queryKey: ["searches"],
        queryFn: fetchAll
    })

    if (!data || isError) return <Error code={ErrorType.InternalServerError} message={error ? error.message : "Failed to fetch data."}/>

    const handleInputChange = (_event: ChangeEvent<HTMLInputElement>) => {
        const input = _event.target.value;
        if (input.trim() !== "") {
            setAnchorEl(_event.currentTarget);
        }
        else {
            setAnchorEl(null);
        }
        setSearchInput(input);
    }

    return (
        <>
            <Stack direction={"row"} justifyContent={"center"} width={"100%"}>
                <Input className={`pl-2 pr-2 ${theme === "light" ? 'text-zinc-100! border-b-zinc-100' : 'text-zinc-700!'} border-b`} disableUnderline fullWidth placeholder="Search" onChange={handleInputChange}/>
                <Tooltip title={"Search"}>
                    <IconButton className={`${theme === "light" ? 'text-zinc-100!' : 'text-zinc-500!'}`} color="inherit" disabled>
                        <Search color="inherit"/>
                    </IconButton>
                </Tooltip>
            </Stack>
            <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }} disableScrollLock disableAutoFocus>
                <List className={`w-72 max-h-80`}>
                    {data.filter(phone => phone.name.toLowerCase().includes(searchInput.toLowerCase())).length === 0 && 
                        <ListItemText className="text-center">
                            <Typography className="text-sm! text-zinc-700">No results found</Typography>
                        </ListItemText>
                    }
                    {data.filter(phone => phone.name.toLowerCase().includes(searchInput.toLowerCase())).map((phone) => 
                        <ListItemButton key={phone.id} href={`/product/${phone.id}`}>
                            <Typography className="text-sm! text-zinc-700">{phone.name}</Typography>
                        </ListItemButton>
                    )}
                </List>
            </Popover>
        </>
    );
}

export default Searchbar;