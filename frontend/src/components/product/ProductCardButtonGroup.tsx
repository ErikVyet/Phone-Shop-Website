import { Button, ButtonGroup, Tooltip } from "@mui/material";
import { motion } from "motion/react";
import { type Dispatch, type JSX, type SetStateAction } from "react";

type ProductCardButtonGroupProps = {
    isHover: boolean,
    padding: number,
    buttons: {
        title: string,
        initialIcon: JSX.Element,
        activeIcon: JSX.Element,
        isHover: boolean,
        setIsHover: Dispatch<SetStateAction<boolean>>
    } []
}

function ProductCardButtonGroup({ isHover, padding, buttons }: ProductCardButtonGroupProps) {
    return (
        <ButtonGroup className="place-content-center rounded-md! text-zinc-500! bg-white shadow-lg" variant="text" color="inherit" component={motion.div} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: isHover ? 1 : 0, scale: isHover ? 1 : 0.9 }}>
            {buttons.map((button, index) =>
                <Tooltip title={button.title} key={index}>
                    <Button className={`${padding === 3 ? 'p-3!' : 'p-4!'}`} onPointerEnter={() => button.setIsHover(true)} onPointerLeave={() => button.setIsHover(false)}>
                        {button.isHover ? button.initialIcon : button.activeIcon }
                    </Button>
                </Tooltip>
            )}
        </ButtonGroup>
    );
}

export default ProductCardButtonGroup;