import { Canvas } from "@react-three/fiber";
import GalaxyScreen from "../components/common/GalaxyScreen";
import HorizontalCardList, { type PhoneCards } from "../components/home/HorizontalCardList";
import TrustSection from "../components/home/TrustSection";
import SloganSection from "../components/home/SloganSection";
import InterfaceSection from "../components/home/InterfaceSection";
import PhotoSection from "../components/home/PhotoSection";

function Home() {
    const cards: PhoneCards = {
        items: [
            { brand: "Apple", image: "/src/assets/images/iphone_17e.png", name: "iPhone 17e" },
            { brand: "Samsung", image: "/src/assets/images/samsung_galaxy_s26_ultra.png", name: "Samsung Galaxy S26 Ultra" },
            { brand: "Asus", image: "/src/assets/images/zenfone_12_ultra.png", name: "Zenfone 12 Ultra" },
            { brand: "Oppo", image: "/src/assets/images/oppo_find_n6.png", name: "Oppo Find N6" },
            { brand: "Vivo", image: "/src/assets/images/v70_fe.png", name: "V70 Fe" }
        ]
    }

    return (
        <>
            <Canvas className="w-full! h-full! fixed! top-0! -z-10! border bg-zinc-950!">
                <GalaxyScreen />
            </Canvas>
            <SloganSection/>
            <TrustSection/>
            <PhotoSection />
            <HorizontalCardList items={cards.items} />
            <InterfaceSection/>
        </>
    )
}

export default Home;