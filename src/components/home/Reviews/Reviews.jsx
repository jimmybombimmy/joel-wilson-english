import "./Reviews.css";
import { reviewsArray, reviewsCircle, reviewsLoop, reviewsDots } from "../../../assets/home/home-images";

import { Carousel } from "react-bootstrap";

export default function ReviewsSection() {
  const baseArray = [];

  const reviewsInFour = (reviewsArray) => {
    let startNum = 0;
    let endNum = 4;
    const grabFour = () => {
      if (endNum > reviewsArray.length) return;
      const arrOfFour = reviewsArray.slice(startNum, endNum);
      baseArray.push(arrOfFour);
      startNum += 4;
      endNum += 4;
      grabFour();
    };
    grabFour();
  };

  reviewsInFour(reviewsArray);

  return (
    <section id="reviewsSection">
      <h2 id="reviewsTitle">What students have to say</h2>
      <Carousel data-bs-theme="dark" indicators={false} interval={null}>
        {baseArray.map((selection) => {
          let i = 0;
          return (
            <Carousel.Item>
              <div className="gridContainer">
                {selection.map((imgPath) => {
                  i++;
                  return (
                    <div className="reviewImg">
                      <img className={`reviewImg${i}Of4 reviewImgFront`} src={imgPath} />
                    </div>
                  );
                })}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="gridContainer backgroundGridContainer">
        <div className="reviewImg1Of4">
          <img className="reviewsCircle" src={reviewsCircle} alt="" />
        </div>
        <div className="reviewImg2Of4">
          <img className="reviewsLoop" src={reviewsLoop} alt="" />
        </div>
        <div className="reviewImg3Of4"></div>
        <div className="reviewImg4Of4">
          <img className="reviewsDots" src={reviewsDots} />
        </div>
      </div>
      {/* {homeImg.reviewsArray.map((review) => {
            console.log(review);
            return <img src={review} />;
          })} */}
    </section>
  );
}
