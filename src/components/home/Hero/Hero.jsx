import "./Hero.css";
import {
  triangleArrows,
  learnUnderline,
  wavyArrows,
  michaelInABox,
  joelLinkedIn,
} from "../../../assets/home/home-images";

export default function HeroSection(homeImg) {
  return (
    <section id="heroSection" data-interval="false">
      <div id="heroInner">
        <section id="heroLeft">
          <img
            id="triangleArrows"
            className="hideBelow991"
            src={triangleArrows}
            alt=""
          />
          <article id="heroInfo">
            <img
              id="joelLinkedIn"
              className="hideAbove992"
              src={joelLinkedIn}
              alt=""
            />
            <h1 id="heroTitle">Let's learn English together!</h1>
            <div id="learnUnderlineContainer">
              <img id="learnUnderline" src={learnUnderline} alt="" />
            </div>
            <p className="heroParagraph hideBelow991">
              Hi! My name is Joel and I teach English as a second language. I
              have been teaching for the past 9 years and know more about
              England than King Charles himself!
            </p>
            <p className="heroParagraph hideAbove992">
              Hi! My name is Joel and I teach English as a second language.
            </p>
            <p className="heroParagraph hideAbove992">
              I have been teaching for the past 9 years and know more about
              England than King Charles himself!
            </p>
            <img
              id="wavyArrows"
              className="hideBelow991"
              src={wavyArrows}
              alt=""
            />
            <div id="heroButtonsContainer">
              <a href="https://joelwilson.as.me/schedule.php">
                <button className="heroButtons heroButton1">
                  Book a Lesson
                </button>
              </a>
              <a href="/about">
                <button className="heroButtons heroButton2">
                  Find out more
                </button>
              </a>
            </div>
          </article>
        </section>
        <section id="heroRight" className="hideBelow991">
          <img id="heroImg" src={michaelInABox} alt="michael-box" />
        </section>
      </div>
    </section>
  );
}
