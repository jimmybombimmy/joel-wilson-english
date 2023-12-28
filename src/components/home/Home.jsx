import "../../styles/Home.css";
import * as homeImg from "../../img/home/home-images.js";

import { useEffect, useState } from "react";

import HeroSection from "./HeroSection.jsx";
import SubHeroReviewsSection from "./SubHeroReviewsSection.jsx";
import ChooseYourClassSection from "../ChooseYourClassSection.jsx";
import SoloOrGroupSection from "./SoloOrGroupSection.jsx";
import ReviewsSection from "./ReviewsSection.jsx";

function Home() {

  return (
    <>
      <main id="homePage">
        <HeroSection />
        {/* <SubHeroReviewsSection /> */}
        <ChooseYourClassSection />
        <SoloOrGroupSection />
        <ReviewsSection />
      </main>
    </>
  );
}

export default Home;
