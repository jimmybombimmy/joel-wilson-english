import "../../styles/Home.css";
import joelImg from "../../img/joel-linkedin.jpeg";
import { Button, Carousel } from "react-bootstrap";
import BlogBox from "./BlogBox";

function Home() {
  return (
    <>
      <main>
        <section id="heroSection" data-interval="false">
          <div id="heroLeft" className="heroParts">
            <article id="heroLeftText">
              <h1>Joel Wilson</h1>
              <h2>English Teacher Extraordinaire</h2>
              <Button className="homeButton" variant="light">
                Book a lesson today
              </Button>
            </article>
          </div>
          <div id="heroRight" className="heroParts">
            <img id="heroRightImg" src={joelImg} alt="Joel Wilson Image" />
          </div>
        </section>
        <section id="blogsHomeSection">
        <h2>Articles and Blogs</h2>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              {[1, 2, 3].map((num) => {
                return <BlogBox num={num} key={num} />;
              })}
            </Carousel.Item>
            <Carousel.Item>
            {[4, 5, 6].map((num) => {
                return <BlogBox num={num} key={num} />;
              })}
            </Carousel.Item>
            <Carousel.Item>
            {[7, 8, 9].map((num) => {
                return <BlogBox num={num} key={num} />;
              })}
            </Carousel.Item>
          </Carousel>
        </section>
      </main>
    </>
  );
}

export default Home;
