import { Calculate } from "../../components/CalculateSection";
import { Community } from "../../components/CommunitySection";
import { LandingPageHeader } from "../../components/Header/LandingPageHeader";
import { Testimonial } from "../../components/Testimonial";


export const HomePage = () => {
    return (
        <div>
            <LandingPageHeader />
            <Calculate />
            <Testimonial />
            <Community />
        </div>
    )
}