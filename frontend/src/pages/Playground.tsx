import { Box, Button, Checkbox, Collapse, IconButton, List, ListItem, ListItemText, MenuItem, Select, Slider, Stack, Typography } from "@mui/material";
import { type SelectChangeEvent } from "@mui/material/Select";
import { ArrowDropUpOutlined, ArrowDropDownOutlined } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import { useState, type ChangeEvent } from "react";
import { type ModelProps } from "../components/Model";

function Playground() {
    const [isCustomMenuCollapse, setAnchorElCustomMenu] = useState(true);
    const [modelId, setModel] = useState('2');
    const [scaleValue, setScaleValue] = useState(0.03);
    const [lightValue, setLightValue] = useState(1);
    const [isGridOn, setIsGridOn] = useState(true);
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isAxesOn, setIsAxesOn] = useState(true);
    const [isRotateOnX, setIsRotateOnX] = useState(false);
    const [isRotateOnY, setIsRotateOnY] = useState(true);   
    const [isRotateOnZ, setIsRotateOnZ] = useState(false);

    const handleModelChange = (_event: SelectChangeEvent) => setModel(_event.target.value);
    const handleScaleSlider = (_event: Event, value: number) => setScaleValue(value);
    const handleLightSlider = (_event: Event, value: number) => setLightValue(value);
    const handleGridHelper = (_event: ChangeEvent, value: boolean) => setIsGridOn(value);
    const handleCameraHelper = (_event: ChangeEvent, value: boolean) => setIsCameraOn(value);
    const handleAxesHelper = (_event: ChangeEvent, value: boolean) => setIsAxesOn(value);
    const handleRotateOnX = (_event: ChangeEvent, value: boolean) => setIsRotateOnX(value);
    const handleRotateOnY = (_event: ChangeEvent, value: boolean) => setIsRotateOnY(value);
    const handleRotateOnZ = (_event: ChangeEvent, value: boolean) => setIsRotateOnZ(value);
    const handleReset = () => {

    };

    const phoneModels: ModelProps[] = [
        { modelId: 1, modelName: 'iPhone 8 Plus', modelUrl: '/src/assets/models/iphone_8_plus.glb', modelScale: scaleValue * 25 },
        { modelId: 2, modelName: 'iPhone 12 Pro', modelUrl: '/src/assets/models/iphone_12_pro.glb', modelScale: scaleValue },
        { modelId: 3, modelName: 'iPhone 14 Pro', modelUrl: '/src/assets/models/iphone_14_pro.glb', modelScale: scaleValue * 850 }
    ];

    return (
        <>
            <header className="w-full h-25">
                <Navbar/>
            </header>
            <main className="w-full h-140 relative">
                <Canvas className="absolute!">
                    <Scene model={phoneModels.find(phone => phone.modelId?.toString() == modelId)} light={lightValue} gridOn={isGridOn} cameraOn={isCameraOn} axesOn={isAxesOn} isRotateX={isRotateOnX} isRotateY={isRotateOnY} isRotateZ={isRotateOnZ}/>
                </Canvas>
                <Box className="w-1/4 max-h-10/12 overflow-y-auto absolute top-2 left-2 bg-white! rounded-sm">
                    <IconButton className="w-full! rounded-none!" onClick={() => setAnchorElCustomMenu(!isCustomMenuCollapse)}>
                        {isCustomMenuCollapse && (<ArrowDropUpOutlined className="size-5!"/>)}
                        {!isCustomMenuCollapse && (<ArrowDropDownOutlined className="size-5!"/>)}
                    </IconButton>
                    <Collapse in={isCustomMenuCollapse}>
                        <List className="bg-white rounded-sm overflow-x-hidden">
                            <ListItem className="gap-3">
                                <Typography className="text-sm!">Model:</Typography>
                                <Select size="small" defaultValue={modelId} className="w-full text-sm!" MenuProps={{disableScrollLock: true}} onChange={handleModelChange}>
                                    {phoneModels.map(phone => 
                                        <MenuItem className="text-sm!" key={phone.modelId} value={phone.modelId}>{phone.modelName}</MenuItem>
                                    )}
                                </Select>
                            </ListItem>
                            <ListItem className="gap-3">
                                <Typography className="text-sm!">Scale:</Typography>
                                <Slider onChange={handleScaleSlider} defaultValue={0.03} size="small" max={0.1} step={0.01} color="info"/>
                                <Typography className="text-sm!">{scaleValue}</Typography>
                            </ListItem>
                            <ListItem className="gap-3">
                                <Typography className="text-sm!">Light:</Typography>
                                <Slider onChange={handleLightSlider} defaultValue={1} size="small" max={2} step={0.1} color="info"/>
                                <Typography className="text-sm!">{lightValue}</Typography>
                            </ListItem>
                            <ListItem className="gap-3 p-0! pl-4! pr-4!">
                                <Typography className="text-sm!">Grid Helper:</Typography>
                                <Checkbox defaultChecked value={isGridOn} onChange={handleGridHelper}/>
                            </ListItem>
                            <ListItem className="gap-3 p-0! pl-4! pr-4!">
                                <Typography className="text-sm!">Camera Helper:</Typography>
                                <Checkbox defaultChecked value={isCameraOn} onChange={handleCameraHelper}/>
                            </ListItem>
                            <ListItem className="gap-3 p-0! pl-4! pr-4!">
                                <Typography className="text-sm!">Axis Helper:</Typography>
                                <Checkbox defaultChecked value={isAxesOn} onChange={handleAxesHelper}/>
                            </ListItem>
                            <ListItem className="gap-3 p-0! pl-4! pr-4!">
                                <Typography className="text-sm!">RotateX:</Typography>
                                <Checkbox value={isRotateOnX} onChange={handleRotateOnX}/>
                            </ListItem>
                            <ListItem className="gap-3 p-0! pl-4! pr-4!">
                                <Typography className="text-sm!">RotateY:</Typography>
                                <Checkbox defaultChecked value={isRotateOnY} onChange={handleRotateOnY}/>
                            </ListItem>
                            <ListItem className="gap-3 p-0! pl-4! pr-4!">
                                <Typography className="text-sm!">RotateX:</Typography>
                                <Checkbox value={isRotateOnZ} onChange={handleRotateOnZ}/>
                            </ListItem>
                            <ListItem className="place-content-center!">
                                <Button onClick={handleReset}>Reset</Button>
                            </ListItem>
                        </List>
                    </Collapse>
                </Box>
            </main>
            <footer className="w-full h-80 bg-black">
                <Stack direction={"row"} className="w-full h-full text-zinc-100">
                    <Box className="flex-3" alignContent={"center"} justifyItems={"center"}>
                        <img className="invert-100! size-1/2 object-contain justify-self-center" src="/src/assets/images/banner.png"/>
                        <Typography className="text-sm! w-10/12">Your trusted destination for the latest smartphones, unbeatable deals, and expert insights.</Typography>
                    </Box>
                    <Box className="flex-2 justify-items-center">
                        <List className="w-3/4">
                            <ListItem className="flex-[100%]">
                                <ListItemText>Links</ListItemText>
                            </ListItem>
                            <ListItem>
                                <Link to="/" className="hover:underline text-sm">Home</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/playground" className="hover:underline text-sm">Playground</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/product" className="hover:underline text-sm">Product</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/download" className="hover:underline text-sm">Download</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/community" className="hover:underline text-sm">Community</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/about" className="hover:underline text-sm">About</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/guide" className="hover:underline text-sm">Guide</Link>
                            </ListItem>
                        </List>
                    </Box>
                    <Box className="flex-2 justify-items-center">
                        <List className="w-3/4">
                            <ListItem>
                                <ListItemText>Socials</ListItemText>
                            </ListItem>
                            <ListItem>
                                <Link to="/" className="hover:underline text-sm">Facebook</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/" className="hover:underline text-sm">Instagram</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/" className="hover:underline text-sm">Twitter</Link>
                            </ListItem>
                        </List>
                    </Box>
                    <Box className="flex-2 justify-items-center">
                        <List className="w-3/4">
                            <ListItem>
                                <ListItemText>Projects</ListItemText>
                            </ListItem>
                            <ListItem>
                                <Link to="/" className="hover:underline text-sm">Project 1</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/" className="hover:underline text-sm">Project 2</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/" className="hover:underline text-sm">Project 3</Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/" className="hover:underline text-sm">Project 4</Link>
                            </ListItem>
                        </List>
                    </Box>
                </Stack>
            </footer>
        </>
    );
}

export default Playground;