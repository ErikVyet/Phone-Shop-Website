import { Canvas } from "@react-three/fiber";
import GalaxyScreen from "../components/common/GalaxyScreen";
import HorizontalCardList from "../components/home/HorizontalCardList";
import TrustSection from "../components/home/TrustSection";
import SloganSection from "../components/home/SloganSection";
import InterfaceSection from "../components/home/InterfaceSection";
import PhotoSection from "../components/home/PhotoSection";

function Home() {
    return (
        <>
            <Canvas className="w-full! h-full! fixed! top-0! -z-10! border bg-zinc-950!">
                <GalaxyScreen />
            </Canvas>
            <SloganSection/>
            <TrustSection/>
            <PhotoSection />
            <HorizontalCardList />
            <InterfaceSection/>
        </>
    )
}

export default Home;