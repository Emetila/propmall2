import React from "react";
import { LandingPageHeader } from "../../components/Header/LandingPageHeader";
import { HeroSection } from "../../components/AboutHero";
import { MilestoneSection } from "../../components/Milestone";

export const AboutPage = () => {
    return (
        <div>
            <LandingPageHeader />
            <HeroSection />
            <MilestoneSection />
        </div>
    )
}