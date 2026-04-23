import { Checkbox, List, ListItem, ListItemText, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useContext, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import { FilterContext } from "../../contexts/FilterContext";

type FilterCriteria = {
    header?: string,
    criteria?: { label: string }[],
    activeCriteria: string[],
    setActiveCriteria: Dispatch<SetStateAction<string[]>>
}

function FilterCriteriaList({ header = "N/A", criteria = [], activeCriteria, setActiveCriteria }: FilterCriteria) {
    const filterContext = useContext(FilterContext);
    if (!filterContext) return null;
    const { isOpen, count, setCount } = filterContext;

    const handleCheckBoxChange = (_event: ChangeEvent, checked: boolean) => {
        if (checked) {
            setActiveCriteria([...activeCriteria, _event.currentTarget.id.replaceAll(" ", "")]);
            setCount(count + 1);
        }
        else {
            setActiveCriteria(activeCriteria.filter(criterion => criterion !== _event.currentTarget.id.replaceAll(" ", "")));
            setCount(count - 1);
        }
        console.log(activeCriteria);
    };

    return (
        <List className="flex-1/6 grow-0 shrink-0 h-full" component={motion.ul} animate={{ opacity: isOpen ? 1 : 0 }} transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}>
            <ListItemText>
                <Typography className="text-zinc-500 text-sm! py-1" textTransform={"uppercase"} letterSpacing={1.5}>{header}</Typography>
            </ListItemText>
            {criteria.map((criterion, index) =>
                <ListItem className="px-0!" key={index}>
                    <Typography className="text-sm! text-zinc-700" width={"85%"}>{criterion.label}</Typography>
                    <Checkbox id={criterion.label} className="px-0! py-0! w-[15%]!" centerRipple onChange={handleCheckBoxChange}/>
                </ListItem>
            )}
        </List>
    );
}

export default FilterCriteriaList;