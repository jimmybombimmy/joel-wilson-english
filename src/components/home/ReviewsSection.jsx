import { Carousel } from "react-bootstrap";

export default function ReviewsSection() {
  return (
    <section id="reviewsSection">
      <Carousel data-bs-theme="dark">
        <Carousel.Item></Carousel.Item>
      </Carousel>
      {/* {homeImg.reviewsArray.map((review) => {
            console.log(review);
            return <img src={review} />;
          })} */}
    </section>
  );
}
