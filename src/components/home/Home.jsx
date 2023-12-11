import "../../styles/Home.css";
import joelImg from "../../img/joel-linkedin.jpeg"
import { Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <main>
        <section id="heroSection">
          <div id="heroLeft" className="heroParts">
            <article id="heroLeftText">
              <h1>Joel Wilson</h1>
              <h2>English Teacher Extraordinaire</h2>
              <Button className="homeButton" variant="light">Book a lesson today</Button>
            </article>
          </div>
          <div id="heroRight" className="heroParts">
            <img id="heroRightImg" src={joelImg} alt="Joel Wilson Image" />
          </div>
        </section>
        <section>
          <p>Some other stuff underneath</p>
        </section>
      </main>
    </>
  );
}

export default Home;
