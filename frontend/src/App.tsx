import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import { Box, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";

function App() {
    return (
        <>
			<header className="w-full h-18">
				<Navbar/>
			</header>
			<main className="w-full h-fit">
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/playground" element={<Playground/>}/>
					<Route path="/product" element={<Product/>}/>
				</Routes>
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

export default App;