import HorizontalCardList, { type PhoneCards } from "../components/home/HorizontalCardList";
import TrustSection from "../components/home/TrustSection";
import SloganSection from "../components/home/SloganSection";
import InterfaceSection from "../components/home/InterfaceSection";
import InteractionSection from "../components/home/InteractionSection";

function Home() {
    const cards: PhoneCards = {
        items: [
            { id: 2, brand: "Apple", image: "/src/assets/images/iphone17e.png", name: "iPhone 17e" },
            { id: 4, brand: "Samsung", image: "/src/assets/images/s26ultra.png", name: "Samsung Galaxy S26 Ultra" },
            { id: 6, brand: "Asus", image: "/src/assets/images/zen12ultra.png", name: "Zenfone 12 Ultra" },
            { id: 3, brand: "Oppo", image: "/src/assets/images/findn6.png", name: "Oppo Find N6" },
            { id: 5, brand: "Vivo", image: "/src/assets/images/v70fe.png", name: "V70 Fe" }
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