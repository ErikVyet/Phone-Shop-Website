import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import Product from "./pages/Product";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeContext } from "./context/ThemeContext";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme");
        return (savedTheme === "light" || savedTheme === "dark") ? savedTheme : "light";
    });
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <QueryClientProvider client={new QueryClient()}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/playground" element={<Playground />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes>
            </QueryClientProvider>
        </ThemeContext.Provider>
    )
}

export default App;