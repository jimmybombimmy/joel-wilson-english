import "./ChooseYourClass.css";
import "../Home.css";

import {
  leftStar,
  leftDots,
  grammarBubble,
  grammarBubbleReverse,
  middleStar,
  middleDots,
  speakBubble,
  rightDots,
  rightStar,
  vocabBubble,
  vocabBubbleReverse
} from "../../../assets/home/home-images";

export default function ChooseYourClassSection() {
  return (
    <section id="chooseYourClassSection">
      <h2 id="chooseYourClassTitle">Choose your class!</h2>
      <section id="justXGrouped">
        <section className="justXSections justGrammarSection">
          <img id="leftStar" className="hideBelow767" src={leftStar} alt="" />
          <img id="leftDots" className="hideBelow767" src={leftDots} alt="" />
          <div className="justXInnerGrids">
            <div className="justXInnerLeft">
              <img
                className="justBubblesImg hideBelow767 hideBelow575"
                src={grammarBubble}
                alt="Grammar speech bubble"
              />
              <img
                className="justBubblesImg hideAbove768 hideBelow575"
                src={grammarBubbleReverse}
                alt="Grammar speech bubble"
              />
            </div>
            <div className="justXText justXInnerRight">
              <h3>Just Grammar!</h3>
              <p>
                Learn the grammar, complete activities to understand them
                correctly with speaking activities in groups to practice them.
              </p>
            </div>
          </div>
        </section>
        <section className="justXSections justSpeakSection">
          <img id="middleStar" className="hideBelow767" src={middleStar} alt="" />
          <img id="middleDots" className="hideBelow767" src={middleDots} alt="" />
          <div className="justXInnerGrids">
            <div className="justXInnerRight">
              <img
                className="justBubblesImg hideBelow575"
                src={speakBubble}
                alt="Speak speech bubble"
              />
            </div>
            <div className="justXText justXInnerLeft">
              <h3>Just Speak!</h3>
              <p>
                Practice speaking about common topics and get lots of feedback
                on your pronunciation, grammar, and vocabulary.{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="justXSections justVocabSection">
          <img id="rightStar" className="hideBelow767" src={rightStar} alt="" />
          <img id="rightDots" className="hideBelow767" src={rightDots} alt="" />
          <div className="justXInnerGrids">
            <div className="justXInnerLeft">
              <img
                className="justBubblesImg hideBelow767 hideBelow575"
                src={vocabBubble}
                alt="Vocabulary speech bubble"
              />
              <img
                className="justBubblesImg hideAbove768 hideBelow575"
                src={vocabBubbleReverse}
                alt="Vocabulary speech bubble"
              />
            </div>
            <div className="justXText justXInnerRight">
              <h3>Just Vocabulary!</h3>
              <p>
                Increase your vocabulary with new words. Complete with exercises
                and feedback every lesson to help you get it right.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
