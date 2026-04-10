import HeroSection from '../components/about/HeroSection';
import MissionSection from '../components/about/MissionSection';
import TechSection from '../components/about/TechSection';
import TeamSection from '../components/about/TeamSection';
import MarketplaceSection from '../components/about/MarketplaceSection';
import { useQuery } from '@tanstack/react-query';
import { useRef, type RefObject } from 'react';
import type { Section } from '../interfaces/Section';
import Loading from './Loading';
import Error from './Error';
import { ErrorType } from '../enums/ErrorType';

async function fetchSections(): Promise<Section[]> {
    const response = await fetch('http://localhost:8080/api/about/all', {
        method: 'GET',
        headers: { 'Content-Type' : 'application/json' },
        mode: 'cors'
    });
    return response.json();
}

function About() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['aboutSections'],
        queryFn: fetchSections,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false
    });

    const missionRef = useRef<HTMLDivElement>(null!);
    const techRef = useRef<HTMLDivElement>(null!);
    const teamRef = useRef<HTMLDivElement>(null!);
    const marketplaceRef = useRef<HTMLDivElement>(null!);

    if (isLoading) return <Loading/>;
    if (isError) return <Error code={ErrorType.BadRequest} message={error.message}/>

    const sections: { label: string, ref: RefObject<HTMLDivElement> } [] = [];
    sections.push({ label: "Our Mission", ref: missionRef });
    sections.push({ label: "The Tech", ref: techRef });
    sections.push({ label: "The Team", ref: teamRef });
    sections.push({ label: "The Marketplace", ref: marketplaceRef });

    return (
        <>
            <HeroSection sections={sections} content={data?.find(section => section.section.includes("Hero"))}/>
            <MissionSection ref={missionRef} content={data?.find(section => section.section.includes("Our Mission"))}/>
            <TechSection ref={techRef} content={data?.find(section => section.section.includes("The Tech"))}/>
            <TeamSection ref={teamRef} content={data?.find(section => section.section.includes("The Team"))}/>
            <MarketplaceSection ref={marketplaceRef} content={data?.find(section => section.section.includes("The Marketplace"))}/>
        </>
    );
};

export default About;