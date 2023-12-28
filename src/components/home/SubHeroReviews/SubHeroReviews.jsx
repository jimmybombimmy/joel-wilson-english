import { reviewsArray } from "../../../img/home/home-images";
import "./SubHeroReviews.css"

export default function SubHeroReviewsSection() {
  const groupedReviews = [];
  const reviews = reviewsArray;
  const reviewsLength = reviews.length;
  const reviewsDivideByFour = reviewsLength / 4;

  const fiveReviews = reviews.slice(0, 5);

  const scrollers = document.querySelectorAll(".scroller");

  function checkForAnimation() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }

  function addAnimation() {
    scrollers.forEach((scroller) => { 
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.splice(fiveReviews.length);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true); // stops duplicated content showing up in a screen reader
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  // const mover = document.querySelectorAll(".mover")
  // console.log(mover[0].getBoundingClientRect()) //doesn't work asynchronously

  return (
    <section id="subHeroReviewsSection">
          <div className="scroller" id="ovalsContainer">
            <div className="scroller__inner">
              <div className="oval mover">
                <h1>1</h1>
              </div>
              <div className="oval">
                <h1>2</h1>
              </div>
              <div className="oval">
                <h1>3</h1>
              </div>
              <div className="oval">
                <h1>4</h1>
              </div>
              <div className="oval">
                <h1>5</h1>
              </div>
            </div>
          </div>
        </section>
  )
}