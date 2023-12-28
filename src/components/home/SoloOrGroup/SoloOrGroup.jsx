import { eclipse1, oneToOneImg, oneToOneSquiggle, groupImg, groupSquiggle, eclipse2 } from "../../../img/home/home-images";

export default function SoloOrGroupSection() {
  return (
    <section id="soloOrGroupSection">
      <section id="oneToOneSection">
        <img id="eclipse1" src={eclipse1} alt="" />
        <img
          id="oneToOneImg"
          className="soloOrGroupImgs"
          src={oneToOneImg}
          alt=""
        />
        <article id="oneToOneInfo">
          <div id="oneToOneContainer">
            <img id="oneToOneSquiggle" src={oneToOneSquiggle} alt="" />
            <h2 id="oneToOneTitle">One to one</h2>
            <p id="oneToOneParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <button className="lessonButtons heroButton2">Book a lesson</button>
            <button className="lessonButtons heroButton1">Find out more</button>
          </div>
        </article>
      </section>
      <section id="groupSection">
        <article id="groupInfo">
          <div id="groupContainer">
            <h2 id="groupTitle">In a group</h2>
            <p id="groupParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <button className="lessonButtons heroButton2">Book a lesson</button>
            <button className="lessonButtons heroButton1">Find out more</button>
          </div>
        </article>
        <img
          id="groupImg"
          className="soloOrGroupImgs"
          src={groupImg}
          alt=""
        />
        <img id="groupSquiggle" src={groupSquiggle} alt="" />
        <img id="eclipse2" src={eclipse2} alt="" />
      </section>
    </section>
  );
}
