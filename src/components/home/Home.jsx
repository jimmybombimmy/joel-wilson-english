import "./Home.css";

import HeroSection from "./Hero/Hero.jsx";
import SubHeroReviewsSection from "./SubHeroReviews/SubHeroReviews.jsx";
import ChooseYourClassSection from "./ChooseYourClass/ChooseYourClass.jsx";
import SoloOrGroupSection from "./SoloOrGroup/SoloOrGroup.jsx";
import ReviewsSection from "./Reviews/Reviews.jsx";
import ArticlesPreview from "./ArticlesPreview/ArticlesPreview.jsx";
import CallToAction from "./CallToAction/CallToAction.jsx";

export default function Home() {
  return (
    <>
      <main id="homePage">
        <HeroSection />
        {/* <SubHeroReviewsSection /> */}
        <ChooseYourClassSection />
        <SoloOrGroupSection />
        <ReviewsSection />
        <ArticlesPreview />
        <CallToAction />
        
      </main>
    </>
  );
}