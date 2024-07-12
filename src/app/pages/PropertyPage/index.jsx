import React from "react";
import { LandingPageHeader } from "../../components/Header/LandingPageHeader";
import { PropertyHero } from "../../components/PropertyHero";
import { Properties } from "../../components/Properties";

export const PropertyPage = () => {
    return (
        <div>
            <LandingPageHeader />
            <PropertyHero />
            <Properties />
        </div>
    )
}