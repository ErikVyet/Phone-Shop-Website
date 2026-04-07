import HeroSection from '../components/about/HeroSection';
import MissionSection from '../components/about/MissionSection';
import TechSection from '../components/about/TechSection';
import TeamSection from '../components/about/TeamSection';
import MarketplaceSection from '../components/about/MarketplaceSection';
import { use } from 'react';
import { useQuery } from '@tanstack/react-query';

interface Section {
    id: number;
    section: string;
    title: string;
    content: string;
    image: string | null;
}

async function fetchSections(): Promise<Section[]> {
    const response = await fetch('http://localhost:8080/api/about/all', {
        method: 'GET',
        headers: { 'Content-Type' : 'application/json' },
        mode: 'cors'
    });
    return response.json();
}

function About() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['aboutSections'],
        queryFn: fetchSections,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false
    })
    console.log(data);
    
    return (
        <>
            <HeroSection/>
            <MissionSection/>
            <TechSection/>
            <TeamSection/>
            <MarketplaceSection/>
        </>
    );
};

export default About;