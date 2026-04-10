import { Box } from "@mui/material";
import type { ErrorType } from "../enums/ErrorType";

function Error({ code, message }: { code: ErrorType, message?: string | null }) {
    return (
        <Box>
            {code}
            {message}
        </Box>
    );
}

export default Error;