import React from "react";
import { HomePage } from "../LandingPage";
import '../../App.css'
import { AssetPage } from "../AssetPage";

export default function AllPages() {
    return (
      <div>
        <HomePage />
        <AssetPage />
      </div>
    )
  }