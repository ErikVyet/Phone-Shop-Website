import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import Product from "./pages/Product";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
    return (
        <>
            <Header/>
            <main className="w-full h-fit">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/playground" element={<Playground />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App;