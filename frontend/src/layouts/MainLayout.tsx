import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { Canvas } from "@react-three/fiber";
import InfiniteGalaxyScreen from "../components/common/InfiniteGalaxyScreen";
import SpiralGalaxyScene from "../components/common/SpiralGalaxyScene";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function MainLayout() {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;
    
    return (
        <>
            <Canvas className="w-full! h-full! fixed! top-0! -z-10!" camera={{ position: [0, 4, 8], fov: 50}}>
                {theme === "light" ? <InfiniteGalaxyScreen /> : <SpiralGalaxyScene />}
            </Canvas>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default MainLayout;