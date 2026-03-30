import { Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Collapse, Container, List, ListItem, Stack, Typography } from "@mui/material";
import Filterbar from "../components/Filterbar";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { useEffect, useState } from "react";

function Product() {
    const [isBrandMenuExpand, setIsBrandMenuExpand] = useState(false);
    const [isScreenMenuExpand, setIsScreenMenuExpand] = useState(false);
    const [isRamMenuExpand, setIsRamMenuExpand] = useState(false);
    const [isStorageMenuExpand, setIsStorageMenuExpand] = useState(false);

    useEffect(() => {

    }, []);

    return (
        <Container className="h-121! mt-4 mb-4 p-0!">
            <Stack direction={"row"} width={"100%"} height={"100%"} gap={2}>
                <Stack className="rounded-sm h-fit" flex={3} alignItems={"center"} maxHeight={"100%"} bgcolor={"white"} overflow={"auto"} sx={{scrollbarWidth: "thin"}}>
                    <Box className="w-full mt-1 pl-3 pr-1">
                        <Filterbar/>
                    </Box>
                    <Box className="w-11/12 mt-2 mb-2">

                    </Box>
                    <Box className="w-full">
                        <Button fullWidth className="text-zinc-700! hover:bg-zinc-100!" onClick={() => setIsBrandMenuExpand(!isBrandMenuExpand)}>
                            <Typography>Brand</Typography>
                            {isBrandMenuExpand && (<ArrowDropUp/>)}
                            {!isBrandMenuExpand && (<ArrowDropDown/>)}
                        </Button>
                        <Collapse in={isBrandMenuExpand}>
                            <List className="text-blue-400">
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>Apple</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>Samsung</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>Xiaomi</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>Asus</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                            </List>
                        </Collapse>
                        <Button fullWidth className="text-zinc-700! hover:bg-zinc-100!" onClick={() => setIsScreenMenuExpand(!isScreenMenuExpand)}>
                            <Typography>Screen</Typography>
                            {isScreenMenuExpand && (<ArrowDropUp/>)}
                            {!isScreenMenuExpand && (<ArrowDropDown/>)}
                        </Button>
                        <Collapse in={isScreenMenuExpand}>
                            <List className="text-blue-400">
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>Small</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>Medium</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>Large</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                            </List>
                        </Collapse>
                        <Button fullWidth className="text-zinc-700! hover:bg-zinc-100!" onClick={() => setIsRamMenuExpand(!isRamMenuExpand)}>
                            <Typography>Ram</Typography>
                            {isRamMenuExpand && (<ArrowDropUp/>)}
                            {!isRamMenuExpand && (<ArrowDropDown/>)}
                        </Button>
                        <Collapse in={isRamMenuExpand}>
                            <List className="text-blue-400">
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>4 GB</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>6 GB</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>8 GB</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>12 GB+</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                            </List>
                        </Collapse>
                        <Button fullWidth className="text-zinc-700! hover:bg-zinc-100!" onClick={() => setIsStorageMenuExpand(!isStorageMenuExpand)}>
                            <Typography>Storage</Typography>
                            {isStorageMenuExpand && (<ArrowDropUp/>)}
                            {!isStorageMenuExpand && (<ArrowDropDown/>)}
                        </Button>
                        <Collapse in={isStorageMenuExpand}>
                            <List className="text-blue-400">
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>64 GB</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>128 GB</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>256 GB</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                                <ListItem className="p-0!">
                                    <Typography width={"85%"} paddingLeft={2}>512 GB+</Typography>
                                    <Box width={"15%"}>
                                        <Checkbox />
                                    </Box>
                                </ListItem>
                            </List>
                        </Collapse>
                    </Box>
                </Stack>
                <Box className="rounded-sm" bgcolor={"white"} flex={9} display={"flex"} flexWrap={"wrap"} maxHeight={"100%"} overflow={"auto"} sx={{scrollbarWidth: "thin"}}>
                    <Box className="flex-1/3 grow-0 shrink-0 h-5/6 p-2">
                        <Card className="h-full shadow-md! shadow-zinc-400">
                            <CardMedia className="object-contain w-fit! h-[55%] justify-self-center" component={"img"} image="/src/assets/images/hero.png"/>
                            <CardContent className="h-[30%] place-content-center justify-items-center">
                                <Typography>Name</Typography>
                                <Typography fontWeight={"bold"}>Brand</Typography>
                                <Typography fontStyle={"italic"}>Price</Typography>
                            </CardContent>
                            <CardActions className="h-[15%] place-content-center gap-5">
                                <Button className="normal-case! bg-blue-500! text-white! pt-0.5! pb-0.5! border! border-blue-500!">Detail</Button>
                                <Button className="normal-case! border! border-blue-500! pt-0.5! pb-0.5! text-nowrap!">3D View</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Box>
            </Stack>
        </Container>
    )
}

export default Product;