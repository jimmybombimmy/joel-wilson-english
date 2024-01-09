import "../Hero/Hero.css";
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
          <img id="triangleArrows" className="compOnly" src={triangleArrows} alt="" />
          <article id="heroInfo">
            <img id="joelLinkedIn" className="mobileOnly" src={joelLinkedIn} alt="" />
            <h1 id="heroTitle">Let's learn English together!</h1>
            <div id="learnUnderlineContainer">
              <img id="learnUnderline" src={learnUnderline} alt="" />
            </div>
            <p className="heroParagraph compOnly">
              Hi! My name is Joel and I teach English as a second language. I
              have been teaching for the past 9 years and know more about
              England than King Charles himself!
            </p>
            <p className="heroParagraph mobileOnly">
              Hi! My name is Joel and I teach English as a second language.
            </p>
            <p className="heroParagraph mobileOnly">
              I have been teaching for the past 9 years and know more about
              England than King Charles himself!
            </p>
            <img id="wavyArrows" className="compOnly" src={wavyArrows} alt="" />
            <div id="heroButtonsContainer">
            <button className="heroButtons heroButton1">Book a Lesson</button>
            <button className="heroButtons heroButton2">Find out more</button>
            </div>
          </article>
        </section>
        <section id="heroRight" className="compOnly">
          <img id="heroImg" src={michaelInABox} alt="michael-box" />
        </section>
      </div>
    </section>
  );
}
