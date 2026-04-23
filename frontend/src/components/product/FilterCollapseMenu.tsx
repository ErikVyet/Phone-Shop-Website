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
    const { isOpen, screens, setScreens, rams, setRams, storages, setStorages } = filterContext;

    const screenCriteria = [
        { label: "Under 5.5'" },
        { label: "5.5' to 6.1'" },
        { label: "6.1' to 6.7'" },
        { label: "Above 6.7'" }
    ];
    
    const ramCriteria = [
        { label: "4 GB" },
        { label: "8 GB" },
        { label: "12 GB" },
        { label: "16 GB" }
    ];

    const storageCriteria = [
        { label: "128 GB" },
        { label: "256 GB" },
        { label: "512 GB" },
        { label: "1 TB" }
    ];

    return (
        <Collapse className={`w-full bg-white rounded-md shadow-lg px-6 ${theme === "light" ? '' : 'shadow-zinc-400'}`} in={isOpen} timeout={"auto"}>
            <Stack direction={"row"} width={"100%"} height={"100%"} py={3} gap={10} justifyContent={"center"} alignItems={"center"}>
                <FilterCriteriaList header={"Filter By Screen"} criteria={screenCriteria} activeCriteria={screens} setActiveCriteria={setScreens}/>
                <FilterCriteriaList header={"Filter By Ram"} criteria={ramCriteria} activeCriteria={rams} setActiveCriteria={setRams}/>
                <FilterCriteriaList header={"Filter By Storage"} criteria={storageCriteria} activeCriteria={storages} setActiveCriteria={setStorages}/>
                <PriceFilter/>
            </Stack>
        </Collapse>
    );
}

export default FilterCollapseMenu;