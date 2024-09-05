import React from "react";
import { LandingPageHeader } from "../../components/Header/LandingPageHeader";
import { FAQHero } from "../../components/FaqHero";
import { FAQSearch } from "../../components/FaqBody/faqsearch";
import FAQ from "../../components/FaqBody/faqbody";


export const FaqPage = () => {
    return (
        <div>
            <LandingPageHeader />
            <FAQHero />
            <FAQSearch />
            <FAQ />
        </div>
    )
}