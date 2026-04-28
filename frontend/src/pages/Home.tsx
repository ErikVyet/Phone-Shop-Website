import HorizontalCardList, { type PhoneCards } from "../components/home/HorizontalCardList";
import TrustSection from "../components/home/TrustSection";
import SloganSection from "../components/home/SloganSection";
import InterfaceSection from "../components/home/InterfaceSection";
import InteractionSection from "../components/home/InteractionSection";

function Home() {
    const cards: PhoneCards = {
        items: [
            { brand: "Apple", image: "/src/assets/images/iphone17e.png", name: "iPhone 17e" },
            { brand: "Samsung", image: "/src/assets/images/s26ultra.png", name: "Samsung Galaxy S26 Ultra" },
            { brand: "Asus", image: "/src/assets/images/zen12ultra.png", name: "Zenfone 12 Ultra" },
            { brand: "Oppo", image: "/src/assets/images/findn6.png", name: "Oppo Find N6" },
            { brand: "Vivo", image: "/src/assets/images/v70fe.png", name: "V70 Fe" }
        ]
    }

    return (
        <>
            <SloganSection/>
            <TrustSection/>
            <InteractionSection />
            <HorizontalCardList items={cards.items} />
            <InterfaceSection/>
        </>
    )
}

export default Home;