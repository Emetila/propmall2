import React from "react";
import { HomePage } from "../LandingPage";
import '../../App.css'
import { AssetPage } from "../AssetPage";
import { AboutPage } from "../About";
import { FaqPage } from "../FAQ";
import { UserDashoardPage } from "../UserDashboard";

export default function AllPages() {
    return (
      <div>
        <HomePage />
        <AssetPage />
        <AboutPage />
        <FaqPage />
        <UserDashoardPage />
      </div>
    )
  }