import { Box, Link, Stack, Typography } from "@mui/material";
import FilterButton from "../common/FilterButton";
import SortComboBox from "./SortComboBox";
import DisplayButtonGroup from "./DisplayButtonGroup";
import FilterCollapseMenu from "./FilterCollapseMenu";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function FilterSection() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <>
            <Stack width={"100%"} direction={"row"} gap={1.5} alignItems={"center"}>
                <Box flex={1} height={"100%"} flexShrink={0} alignContent={"center"}>
                    <Typography className={`text-xs! ${theme === "light" ? 'text-zinc-400' : 'text-zinc-100'}`}>
                        <Link className="hover:cursor-pointer" href="/" color="inherit" underline="none">Home</Link> / Shop
                    </Typography>
                </Box>
                <Box height={"100%"} flex={"10%"} flexGrow={0} flexShrink={0}>
                    <FilterButton/>
                </Box>
                <Box height={"100%"} flex={"15%"} flexGrow={0} flexShrink={0} alignContent={"center"}>
                    <SortComboBox/>
                </Box>
                <Box height={"100%"} flex={"12%"} flexGrow={0} flexShrink={0}>
                    <DisplayButtonGroup/>
                </Box>
            </Stack>
            <FilterCollapseMenu/>
        </>
    );
}

export default FilterSection;