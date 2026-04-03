import { IconButton, List, ListItem } from "@mui/material";

type HorizontalIconListProps = {
    items?: { src: string, invert: boolean, link: string }[]
}

function HorizontalIconList({ items = [] }: HorizontalIconListProps) {
    return (
        <List className="w-2/3 flex-1/10 flex grow-0 shrink-0">
            {items.map((item, index) =>
                <ListItem key={index} className="place-content-center!">
                    <IconButton href={item.link} disableRipple>
                        <img draggable={false} className={`object-contain size-8 ${item.invert ? "invert-100" : "" }`} src={item.src} />
                    </IconButton>
                </ListItem>
            )}
        </List>
    );
}

export default HorizontalIconList;
export type { HorizontalIconListProps };