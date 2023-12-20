import "../../styles/Home.css";
import michaelInABox from "../../img/michael-in-a-box.png";
import learnUnderline from "../../img/learn-underline.png";
import wavyArrows from "../../img/wavy-arrows.png";
import triangleArrows from "../../img/triangle-arrows.png"
import grammarBubble from "../../img/grammar-bubble.png"
import speakBubble from "../../img/speak-bubble.png"
import vocabBubble from "../../img/vocabulary-bubble.png"

function Home() {
  return (
    <>
      <main>
        <section id="heroSection" data-interval="false">
          <section id="heroLeft">
            <img id="triangleArrows" src={triangleArrows} alt="" />
            <article id="heroInfo">
              <h1 id="heroTitle">Let's learn English together!</h1>
              <img id="learnUnderline" src={learnUnderline} alt="" />
              <p id="heroParagraph">
                Hi! My name is Joel and I teach English as a second language. I
                have been teaching for the past 8 years and know more about
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
        <section id="chooseYourClassSection">
          <h2 id="chooseYourClassTitle">Choose your class!</h2>
          <section id="justXGrouped">
            <section className="justXSections justGrammarSection">
              <img src={grammarBubble} alt="Grammar speech bubble" />
            </section>
            <section className="justXSections justSpeakSection">
              <img src={speakBubble} alt="Speak speech bubble" />
            </section>
            <section className="justXSections justVocabSection">
              <img src={vocabBubble} alt="Vocabulary speech bubble" />
            </section>
          </section>
        </section>
        {/* <section id="blogsHomeSection">
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
        </section> */}
      </main>
    </>
  );
}

export default Home;
