import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import Product from "./pages/Product";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { useState } from "react";
import { ThemeContext } from "./main";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme");
        return (savedTheme === "light" || savedTheme === "dark") ? savedTheme : "light";
    });
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Header />
            <main className="w-full h-fit">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/playground" element={<Playground />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </main>
            <Footer />
        </ThemeContext.Provider>
    )
}

export default App;