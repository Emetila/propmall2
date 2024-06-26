import React from "react";
import { HomePage } from "../LandingPage";
import '../../App.css'
import { AssetPage } from "../AssetPage";
import { AboutPage } from "../About";

export default function AllPages() {
    return (
      <div>
        <HomePage />
        <AssetPage />
        <AboutPage />
      </div>
    )
  }