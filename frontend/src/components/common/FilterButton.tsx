import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Close, FilterAlt } from "@mui/icons-material";
import { FilterContext } from "../../contexts/FilterContext";

function FilterButton() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const filterContext = useContext(FilterContext);
    if (!filterContext) return null;
    const { isOpen, setIsOpen, count } = filterContext;

    return (
        <Stack width={"100%"} height={"100%"} direction={"row"} justifyContent={"center"} alignItems={"center"} >
            <Button className={`flex-[70%] p-0! normal-case! hover:bg-transparent! ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-100!'}`} disableRipple startIcon={(isOpen ? <Close className={`${theme === "light" ? 'text-zinc-600' : 'text-zinc-200'}`}/> : <FilterAlt className={`${theme === "light" ? 'text-zinc-600' : 'text-zinc-200'}`}/>)} onClick={() => setIsOpen(!isOpen)}>
                Filters
            </Button>
            {count > 0 && (
                <Box flex={"30%"} height={"100%"} flexGrow={0} flexShrink={0} alignContent={"center"}>
                    <Typography className={`size-5 text-xs! rounded-full ${theme === "light" ? 'bg-zinc-600 text-zinc-100' : 'bg-zinc-100 text-zinc-700'}`} textAlign={"center"} alignContent={"center"}>{count}</Typography>
                </Box>
            )}
        </Stack>
    );
}

export default FilterButton;