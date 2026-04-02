import { Box, Button, Checkbox, Collapse, IconButton, List, ListItem, MenuItem, Select, Slider, Typography } from "@mui/material";
import { type SelectChangeEvent } from "@mui/material/Select";
import { ArrowDropUpOutlined, ArrowDropDownOutlined } from "@mui/icons-material";
import { Canvas } from "@react-three/fiber";
import Scene from "../components/common/Scene";
import { useState, type ChangeEvent } from "react";
import { type ModelProps } from "../components/common/Model";

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
        <Box className="h-144">
            <Canvas className="">
                <Scene model={phoneModels.find(phone => phone.modelId?.toString() == modelId)} light={lightValue} gridOn={isGridOn} cameraOn={isCameraOn} axesOn={isAxesOn} isRotateX={isRotateOnX} isRotateY={isRotateOnY} isRotateZ={isRotateOnZ} />
            </Canvas>
            <Box className="w-1/4 max-h-10/12 overflow-y-auto absolute top-28 left-3 bg-white! rounded-sm" sx={{ scrollbarWidth: "thin" }}>
                <IconButton className="w-full! rounded-none!" onClick={() => setAnchorElCustomMenu(!isCustomMenuCollapse)}>
                    {isCustomMenuCollapse && (<ArrowDropUpOutlined className="size-5!" />)}
                    {!isCustomMenuCollapse && (<ArrowDropDownOutlined className="size-5!" />)}
                </IconButton>
                <Collapse in={isCustomMenuCollapse}>
                    <List className="bg-white rounded-sm overflow-x-hidden">
                        <ListItem className="gap-3">
                            <Typography className="text-sm!">Model:</Typography>
                            <Select size="small" defaultValue={modelId} className="w-full text-sm!" MenuProps={{ disableScrollLock: true }} onChange={handleModelChange}>
                                {phoneModels.map(phone =>
                                    <MenuItem className="text-sm!" key={phone.modelId} value={phone.modelId}>{phone.modelName}</MenuItem>
                                )}
                            </Select>
                        </ListItem>
                        <ListItem className="gap-3">
                            <Typography className="text-sm!">Scale:</Typography>
                            <Slider onChange={handleScaleSlider} defaultValue={0.03} size="small" max={0.1} step={0.01} color="info" />
                            <Typography className="text-sm!">{scaleValue}</Typography>
                        </ListItem>
                        <ListItem className="gap-3">
                            <Typography className="text-sm!">Light:</Typography>
                            <Slider onChange={handleLightSlider} defaultValue={1} size="small" max={2} step={0.1} color="info" />
                            <Typography className="text-sm!">{lightValue}</Typography>
                        </ListItem>
                        <ListItem className="gap-3 p-0! pl-4! pr-4!">
                            <Typography className="text-sm!">Grid Helper:</Typography>
                            <Checkbox defaultChecked value={isGridOn} onChange={handleGridHelper} />
                        </ListItem>
                        <ListItem className="gap-3 p-0! pl-4! pr-4!">
                            <Typography className="text-sm!">Camera Helper:</Typography>
                            <Checkbox defaultChecked value={isCameraOn} onChange={handleCameraHelper} />
                        </ListItem>
                        <ListItem className="gap-3 p-0! pl-4! pr-4!">
                            <Typography className="text-sm!">Axis Helper:</Typography>
                            <Checkbox defaultChecked value={isAxesOn} onChange={handleAxesHelper} />
                        </ListItem>
                        <ListItem className="gap-3 p-0! pl-4! pr-4!">
                            <Typography className="text-sm!">RotateX:</Typography>
                            <Checkbox value={isRotateOnX} onChange={handleRotateOnX} />
                        </ListItem>
                        <ListItem className="gap-3 p-0! pl-4! pr-4!">
                            <Typography className="text-sm!">RotateY:</Typography>
                            <Checkbox defaultChecked value={isRotateOnY} onChange={handleRotateOnY} />
                        </ListItem>
                        <ListItem className="gap-3 p-0! pl-4! pr-4!">
                            <Typography className="text-sm!">RotateX:</Typography>
                            <Checkbox value={isRotateOnZ} onChange={handleRotateOnZ} />
                        </ListItem>
                        <ListItem className="place-content-center!">
                            <Button onClick={handleReset}>Reset</Button>
                        </ListItem>
                    </List>
                </Collapse>
            </Box>
        </Box>
    );
}

export default Playground;