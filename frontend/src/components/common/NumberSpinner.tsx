import { Add, Remove } from "@mui/icons-material";
import { Box, IconButton, InputBase, Stack } from "@mui/material";
import { useContext, type Dispatch, type SetStateAction } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";

type NumberSpinnerProps = {
    value: number,
    setValueFn: Dispatch<SetStateAction<number>>
}

function NumberSpinner({ value, setValueFn }: NumberSpinnerProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Stack className={`rounded-sm border ${theme === "light" ? 'bg-white border-blue-500' : 'bg-zinc-800 border-zinc-800'}`} direction={"row"} width={"100%"} height={"100%"}>
            <IconButton className={`flex-1 h-full rounded-l-sm! rounded-r-none! ${theme === "light" ? 'bg-white!' : 'bg-zinc-800!'} p-0! aspect-square scale-80`} disableRipple onClick={() => setValueFn(prev => prev > 1 ? prev - 1 : prev)}>
                <Remove className={theme === "light" ? "" : "text-zinc-100!"}/>
            </IconButton>
            <Box flex={3} height={"100%"}>
                <InputBase className="size-full! bg-white! text-sm!" value={value} type="number" sx={{ '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': { display: 'none' }, '& input[type=number]': { MozAppearance: 'textfield' }, "& input": { textAlign: "center" } }}/>
            </Box>
            <IconButton className={`flex-1 h-full rounded-l-none! rounded-r-sm! ${theme === "light" ? 'bg-white!' : 'bg-zinc-800!'} p-0! aspect-square scale-80`} disableRipple onClick={() => setValueFn(prev => prev + 1)}>
                <Add className={theme === "light" ? "" : "text-zinc-100!"}/>
            </IconButton>
        </Stack>
    );
}

export default NumberSpinner;