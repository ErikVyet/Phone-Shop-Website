import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import Product from "./pages/Product";

function App() {
    return (
        <Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/playground" element={<Playground/>}/>
			<Route path="/product" element={<Product/>}/>
		</Routes>
    )
}

export default App;