import "../Hero/Hero.css"
import { triangleArrows, learnUnderline, wavyArrows, michaelInABox } from "../../../assets/home/home-images"


export default  function HeroSection(homeImg) {
  return (
  <section id="heroSection" data-interval="false">
  <section id="heroLeft">
    <img id="triangleArrows" src={triangleArrows} alt="" />
    <article id="heroInfo">
      <h1 id="heroTitle">Let's learn English together!</h1>
      <img id="learnUnderline" src={learnUnderline} alt="" />
      <p id="heroParagraph">
        Hi! My name is Joel and I teach English as a second language. I
        have been teaching for the past 9 years and know more about
        England than King Charles himself!
      </p>
      <img id="wavyArrows" src={wavyArrows} alt="" />
      <button className="heroButtons heroButton1">Book a Lesson</button>
      <button className="heroButtons heroButton2">Find out more</button>
    </article>
  </section>
  <section id="heroRight">
    <img id="heroImg" src={michaelInABox} alt="michael-box" />
  </section>
</section>
  )
}