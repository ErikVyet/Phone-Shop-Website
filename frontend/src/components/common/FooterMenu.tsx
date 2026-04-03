import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

type FooterMenuProps = {
    header?: string,
    items?: { path: string, text: string }[]
}

function FooterMenu({ header = "N/A", items = [] }: FooterMenuProps) {
    return (
        <Box className="flex-2 justify-items-center">
            <List className="w-3/4">
                <ListItem>
                    <ListItemText>{header}</ListItemText>
                </ListItem>
                {items.map((item, index) =>
                    <ListItem key={index}>
                        <Link to={item.path} className="hover:underline text-sm" draggable={false}>{item.text}</Link>
                    </ListItem>
                )}
            </List>
        </Box>
    );
}

export default FooterMenu;
export type { FooterMenuProps };