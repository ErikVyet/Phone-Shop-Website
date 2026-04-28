import { MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function SortComboBox() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Select className={`border rounded-sm bg-white pl-2 text-sm! text-zinc-600! ${theme === "light" ? 'border-zinc-600' : 'border-black'}`} variant="standard" fullWidth defaultValue={0} disableUnderline MenuProps={{ disableScrollLock: true }}>
            <MenuItem className={`text-zinc-700! text-sm! ${theme === "light" ? '' : ' focus:bg-zinc-200!'}`} value={0}>Default sorting</MenuItem>
            <MenuItem className={`text-zinc-700! text-sm! ${theme === "light" ? '' : ' focus:bg-zinc-200!'}`} value={1}>Sort by popularity</MenuItem>
        </Select>
    );
}

export default SortComboBox;