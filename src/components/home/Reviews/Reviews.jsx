import "./Reviews.css";
import "../../App.css";
import {
  reviewsArray,
  reviewsCircle,
  reviewsLoop,
  reviewsDots,
} from "../../../assets/home/home-images";

import { Carousel } from "react-bootstrap";

export default function ReviewsSection() {
  const baseArrayInFour = [];

  const reviewsInFour = (reviewsArray) => {
    let startNum = 0;
    let endNum = 4;
    const grabFour = () => {
      if (endNum > reviewsArray.length) return;
      const arrOfFour = reviewsArray.slice(startNum, endNum);
      baseArrayInFour.push(arrOfFour);
      startNum += 4;
      endNum += 4;
      grabFour();
    };
    grabFour();
  };

  const baseArrayInTwo = [];

  const reviewsInTwo = (reviewsArray) => {
    let startNum = 0;
    let endNum = 2;
    const grabTwo = () => {
      if (endNum > reviewsArray.length) return;
      const arrOfTwo = reviewsArray.slice(startNum, endNum);
      baseArrayInTwo.push(arrOfTwo);
      startNum += 2;
      endNum += 2;
      grabTwo();
    };
    grabTwo();
  };

  reviewsInFour(reviewsArray);
  reviewsInTwo(reviewsArray);

  return (
    <section id="reviewsSection">
      <h2 id="reviewsTitle">What students have to say</h2>
      <div className="fourReviewsSection hideBelow767">
        <Carousel data-bs-theme="dark" indicators={false} interval={null}>
          {baseArrayInFour.map((selection, index) => {
            let i = 0;
            return (
              <Carousel.Item key={`reviewInd${index}Num${i+1}grid4`}> 
                <div className="gridContainer" >
                  {selection.map((imgPath) => {
                    i++;
                    return (
                      <div className="reviewImg" key={`imgOf4${imgPath}`}>
                        <img
                          className={`reviewImg${i}Of4 reviewImgFront`}
                          src={imgPath}
                          key={imgPath}
                        />
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
      </div>
      <div className="twoReviewsSection hideAbove768">
        <Carousel data-bs-theme="dark" indicators={false} interval={null}>
          {baseArrayInTwo.map((selection, index) => {
            let i = 0;
            return (
              <Carousel.Item key={`reviewInd${index}Num${i+1}grid2`}>
                <div className="gridContainer">
                  {selection.map((imgPath) => {
                    i++;
                    return (
                      <div className="reviewImg" key={`imgOf2${imgPath}`}>
                        <img
                          className={`reviewImg${i}Of4 reviewImgFront`}
                          src={imgPath}
                        />
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
            <img className="reviewsDots" src={reviewsDots} />
          </div>
        </div>
      </div>
    </section>
  );
}
