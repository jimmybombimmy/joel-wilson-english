import "./ChooseYourClass.css";
import {
  leftStar,
  leftDots,
  grammarBubble,
  middleStar,
  middleDots,
  speakBubble,
  rightDots,
  rightStar,
  vocabBubble,
} from "../../../assets/home/home-images";

export default function ChooseYourClassSection() {
  return (
    <section id="chooseYourClassSection">
      <h2 id="chooseYourClassTitle">Choose your class!</h2>
      <section id="justXGrouped">
        <section className="justXSections justGrammarSection">
          <img id="leftStar" src={leftStar} alt="" />
          <img id="leftDots" src={leftDots} alt="" />
          <img
            className="justBubbles"
            src={grammarBubble}
            alt="Grammar speech bubble"
          />
          <h3>Just Grammar!</h3>
          <p>
            Learn the grammar, complete activities to understand them correctly
            with speaking activities in groups to practice them.
          </p>
          {/* <button>Book Now!</button> */}
        </section>
        <section className="justXSections justSpeakSection">
          <img id="middleStar" src={middleStar} alt="" />
          <img id="middleDots" src={middleDots} alt="" />
          <img
            className="justBubbles"
            src={speakBubble}
            alt="Speak speech bubble"
          />
          <h3>Just Speak!</h3>
          <p>
            Practice speaking about common topics and get lots of feedback on
            your pronunciation, grammar, and vocabulary.{" "}
          </p>
          {/* <button>Book Now!</button> */}
        </section>
        <section className="justXSections justVocabSection">
          <img id="rightStar" src={rightStar} alt="" />
          <img id="rightDots" src={rightDots} alt="" />
          <img
            className="justBubbles"
            src={vocabBubble}
            alt="Vocabulary speech bubble"
          />
          <h3>Just Vocabulary!</h3>
          <p>
            Increase your vocabulary with new words. Complete with exercises and
            feedback every lesson to help you get it right.
          </p>
          {/* <button>Book Now!</button> */}
        </section>
      </section>
    </section>
  );
}
