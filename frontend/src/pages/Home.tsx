import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import Navbar from "../components/Navbar";
import { Box, Button, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <header className="w-full h-25">
                <Navbar/>
            </header>
            <main className="w-full h-140">
                <Stack direction={"row"} className="w-full h-full">
                    <Box className="flex-6 h-full flex flex-col justify-center items-center gap-5">
                        <Typography className="text-4xl! text-zinc-100 text-center">Smart Phones. Smarter Choices</Typography>
                        <Typography className="text-zinc-400 text-center w-10/12">Discover the latest smartphones with cutting-edge technology, competitive prices, and trusted quality—all in one place.</Typography>
                        <Button href="/playground" className="normal-case! text-zinc-600! bg-zinc-100! pl-4! pr-4! pt-2! pb-2! hover:bg-zinc-200!" color="inherit">Playground <ArrowRightAltOutlined/></Button>
                    </Box>
                    <Box className="flex-6 h-full place-content-center justify-items-center">
                        <Canvas className="w-10/12! h-10/12! border border-zinc-100 rounded-xl">
                            <Scene model={{modelScale: 0.03, modelUrl: '/src/assets/models/iphone_12_pro.glb'}}/>
                        </Canvas>
                    </Box>
                </Stack>
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
    )
}

export default Home;