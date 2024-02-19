import "./SoloOrGroup.css";
import "../../App.css";
import {
  eclipse1,
  oneToOneImg,
  oneToOneSquiggle,
  groupImg,
  groupSquiggle,
  eclipse2,
} from "../../../assets/home/home-images";

export default function SoloOrGroupSection() {
  return (
    <section id="soloOrGroupSection">
      <section id="oneToOneSection">
        <img id="eclipse1" src={eclipse1} alt="" />
        <img
          id="oneToOneImg"
          className="soloOrGroupImgs hideBelow991"
          src={oneToOneImg}
          alt="One to one class image"
        />
        <article id="oneToOneInfo">
          <div id="oneToOneContainer" className="soloOrGroupContainer">
            <img id="oneToOneSquiggle" src={oneToOneSquiggle} alt="" />
            <h2 id="oneToOneTitle" className="soloOrGroupTitle">
              One to one
            </h2>
            <p id="oneToOneParagraph" className="soloOrGroupParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="lessonButtonsGroup">
              <a href="https://joelwilson.as.me/schedule.php">
                <button className="lessonButtons heroButton2">
                  Book a lesson
                </button>
              </a>
              <a href="/one-to-one-classes">
                <button className="lessonButtons heroButton1">
                  Find out more
                </button>
              </a>
            </div>
          </div>
        </article>
      </section>
      <section id="groupSection">
        <article id="groupInfo">
          <div id="groupContainer">
            <h2 id="groupTitle" className="soloOrGroupTitle">
              In a group
            </h2>
            <p id="groupParagraph" className="soloOrGroupParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="lessonButtonsGroup">
              <a href="https://joelwilson.as.me/schedule.php">
                <button className="lessonButtons heroButton2 groupButtons">
                  Book a lesson
                </button>
              </a>
              <a href="/group-classes">
                <button className="lessonButtons heroButton1 groupButtons">
                  Find out more
                </button>
              </a>
            </div>
          </div>
        </article>
        <img
          id="groupImg"
          className="soloOrGroupImgs hideBelow991"
          src={groupImg}
          alt="Group class image"
        />
        <img id="groupSquiggle" src={groupSquiggle} alt="" />
        <img id="eclipse2" src={eclipse2} alt="" />
      </section>
    </section>
  );
}
