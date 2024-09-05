import { Calculate } from "../../components/CalculateSection";
import { Community } from "../../components/CommunitySection";
import { LandingPageHeader } from "../../components/Header/LandingPageHeader";
import { Testimonial } from "../../components/Testimonial";
import  Hero  from "../../components/Hero";
import InvestmentPortfolio  from "../../components/InvestmentPortfolio"


export const HomePage = () => {
    return (
        <div>
            <LandingPageHeader />
            <Hero />
            <InvestmentPortfolio />
            <Calculate />
            <Testimonial />
            <Community />
        </div>
    )
}