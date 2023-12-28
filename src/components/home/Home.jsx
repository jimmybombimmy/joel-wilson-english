import "./Home.css";

import HeroSection from "./Hero/Hero.jsx";
import SubHeroReviewsSection from "./SubHeroReviews/SubHeroReviews.jsx";
import ChooseYourClassSection from "./ChooseYourClass/ChooseYourClass.jsx";
import SoloOrGroupSection from "./SoloOrGroup/SoloOrGroup.jsx";
import ReviewsSection from "./Reviews/Reviews.jsx";

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
