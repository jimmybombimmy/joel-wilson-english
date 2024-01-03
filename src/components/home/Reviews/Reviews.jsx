import "./Reviews.css";
import { reviewsArray } from "../../../assets/home/home-images";

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
            <Carousel.Item  >
              <div className="gridContainer">
                {selection.map((imgPath) => {
                  i++;
                  console.log(imgPath);
                  return (
                    <div className="reviewImg">
                      <img
                        className={`reviewImg${i}Of4`}
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
      {/* {homeImg.reviewsArray.map((review) => {
            console.log(review);
            return <img src={review} />;
          })} */}
    </section>
  );
}
