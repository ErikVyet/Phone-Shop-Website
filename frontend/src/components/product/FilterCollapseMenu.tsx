import { Collapse, Stack } from "@mui/material";
import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import FilterCriteriaList from "./FilterCriteriaList";
import PriceFilter from "./PriceFilter";
import { ThemeContext } from "../../contexts/ThemeContext";

function FilterCollapseMenu() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const filterContext = useContext(FilterContext);
    if (!filterContext) return null;
    const { isOpen } = filterContext;

    const screenCriteria = [
        { label: "Under 5.5'", action: null },
        { label: "5.5' to 6.1'", action: null },
        { label: "6.1' to 6.7'", action: null },
        { label: "Above 6.7'", action: null }
    ];
    
    const ramCriteria = [
        { label: "4 GB", action: null },
        { label: "8 GB", action: null },
        { label: "12 GB", action: null },
        { label: "16 GB", action: null }
    ];

    const storageCriteria = [
        { label: "128 GB", action: null },
        { label: "256 GB", action: null },
        { label: "512 GB", action: null },
        { label: "1 TB", action: null }
    ];

    return (
        <Collapse className={`w-full bg-white rounded-md shadow-lg px-6 ${theme === "light" ? '' : 'shadow-zinc-400'}`} in={isOpen}>
            <Stack direction={"row"} width={"100%"} height={"100%"} py={3} gap={10} justifyContent={"center"} alignItems={"center"}>
                <FilterCriteriaList header={"Filter By Screen"} criteria={screenCriteria}/>
                <FilterCriteriaList header={"Filter By Ram"} criteria={ramCriteria}/>
                <FilterCriteriaList header={"Filter By Storage"} criteria={storageCriteria}/>
                <PriceFilter/>
            </Stack>
        </Collapse>
    );
}

export default FilterCollapseMenu;