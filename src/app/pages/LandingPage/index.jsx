import { Calculate } from "../../components/CalculateSection";
import { LandingPageHeader } from "../../components/Header/LandingPageHeader"; 


export const HomePage = () => {
    return (
        <div>
            <LandingPageHeader />
           <Calculate />
        </div>
    )
}