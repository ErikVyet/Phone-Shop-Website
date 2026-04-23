import { GridOn, GridView, Menu } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FilterContext } from "../../contexts/FilterContext";

function DisplayButtonGroup() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const filterContext = useContext(FilterContext);
    if (!filterContext) return null;
    const { display, setDisplay } = filterContext;

    const buttons = [
        { icon: <GridView color="inherit" sx={{ opacity: display === "flex" ? 1 : 0.5 }}/>, tip: "Flex", action: () => setDisplay("flex") },
        { icon: <GridOn color="inherit" sx={{ opacity: display === "grid" ? 1 : 0.5 }}/>, tip: "Grid", action: () => setDisplay("grid") },
        { icon: <Menu color="inherit" sx={{ opacity: display === "list" ? 1 : 0.5 }}/>, tip: "List", action: () => setDisplay("list")}
    ];

    return (
        <Stack direction={"row"} width={"100%"} height={"100%"} justifyContent={"space-evenly"} alignItems={"center"}>
            {buttons.map((button, index) =>
                <Tooltip title={button.tip} key={index}>
                    <IconButton className={`${theme === "light" ? 'text-zinc-600!' : 'text-zinc-200! hover:bg-zinc-700!'}`} key={index} onClick={button.action}>
                        {button.icon}
                    </IconButton>
                </Tooltip>
            )}
        </Stack>
    );
}

export default DisplayButtonGroup;