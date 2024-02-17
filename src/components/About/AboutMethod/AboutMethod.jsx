import {
  undrawCertificate,
  undrawGroup,
  undrawHappyNews,
} from "../../../assets/about/about-images";
import "./AboutMethod.css";

export default function AboutMethod() {
  return (
    <section id="aboutMethodSection">
      <div class="aboutMethodInner">
        <h1 id="myMethodTitle">My Method</h1>
        <article id="aboutArticlePt1">
          <img
            className="aboutArticleRight aboutMethodImg"
            src={undrawGroup}
            alt="Illustration of receiving feedback as a group"
          />
          <div className="aboutArticleLeft">
            <h2 className="aboutMethodTitle">
              I believe that feedback is key to proper language learning.
            </h2>
            <p className="aboutMethodParagraph">
              As such, I’ve developed my own method of giving feedback: a
              feedback form that covers every aspect of productive English;
              pronunciation, vocabulary, and grammar, and anything else that a
              student might need!
            </p>
            <p className="aboutMethodParagraph">
              My students love this feedback form, which I fill in during our
              classes (an example of which you can see in my photos on this
              page).
            </p>
          </div>
        </article>

        <article id="aboutArticlePt2">
          <img
            className="aboutArticleLeft aboutMethodImg"
            src={undrawCertificate}
            alt="Illustration of receiving a certificate"
          />
          <div className="aboutArticleRight">
            <h2 className="aboutMethodTitle">What can you achieve?</h2>
            <p className="aboutMethodParagraph">
              My particular area of expertise is with B2/C1/C2 students who want
              to improve their fluency and vocabulary.
            </p>
            <p className="aboutMethodParagraph">
              These students often want to develop their English skills in a
              particular area, such as their career or their studies.
            </p>
            <p className="aboutMethodParagraph">
              I enjoy being flexible with these topics and adapting materials
              according to the student’s goals.
            </p>
            <p className="aboutMethodParagraph">
              I’ve worked with students from a variety of disciplines, from
              palliative care to beer brewing! In addition to this, I have ample
              experience with the Cambridge and IELTS exams, from beginner to
              advanced/proficiency.
            </p>
          </div>
        </article>

        <article id="aboutArticlePt3">
          <img
            src={undrawHappyNews}
            className="aboutArticleRight aboutMethodImg"
            alt="Illustration of successful news"
          />
          <div className="aboutArticleLeft">
            <h2 className="aboutMethodTitle">My aims for you is to:</h2>
            <ul>
              <li>
                Make English language learning enjoyable and realistic, to give
                you a motivational, functional, and applicable understanding of
                the English language.
              </li>
              <li>
                Give higher-level students the personalised advice which they
                need to achieve proficiency.
              </li>
              <li>
                Give lower-level students lessons which develop their language
                skills and don’t make them feel stressed about language
                learning!
              </li>
              <li>
                Give my young students a positive experience of education in
                order that they develop a positive attitude to their studies in
                general
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
