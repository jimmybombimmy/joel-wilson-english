import "../../styles/Home.css";
import * as homeImg from "../../img/home/home-images.js";
import { Carousel } from "react-bootstrap";
import HeroSection from "./HeroSection.jsx";
import { useEffect, useState } from "react";

function Home() {
  const groupedReviews = [];
  const reviews = homeImg.reviewsArray;
  const reviewsLength = reviews.length;
  const reviewsDivideByFour = reviewsLength / 4;

  const fiveReviews = reviews.slice(0, 5);

  const scrollers = document.querySelectorAll(".scroller");

  function checkForAnimation() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }

  function addAnimation() {
    scrollers.forEach((scroller) => { 
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.splice(fiveReviews.length);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true); // stops duplicated content showing up in a screen reader
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  // const mover = document.querySelectorAll(".mover")
  // console.log(mover[0].getBoundingClientRect()) //doesn't work asynchronously

  return (
    <>
      <main id="homePage">
        <HeroSection homeImg={homeImg}/>

        <section id="subHeroReviewsSection">
          <div className="scroller" id="ovalsContainer">
            <div className="scroller__inner">
              <div className="oval mover">
                <h1>1</h1>
              </div>
              <div className="oval">
                <h1>2</h1>
              </div>
              <div className="oval">
                <h1>3</h1>
              </div>
              <div className="oval">
                <h1>4</h1>
              </div>
              <div className="oval">
                <h1>5</h1>
              </div>
            </div>
          </div>
        </section>


        <section id="chooseYourClassSection">
          <h2 id="chooseYourClassTitle">Choose your class!</h2>
          <section id="justXGrouped">
            <section className="justXSections justGrammarSection">
              <img id="leftStar" src={homeImg.leftStar} alt="" />
              <img id="leftDots" src={homeImg.leftDots} alt="" />
              <img
                className="justBubbles"
                src={homeImg.grammarBubble}
                alt="Grammar speech bubble"
              />
              <h3>Just Grammar!</h3>
              <p>
                Learn the grammar, complete activities to understand them
                correctly with speaking activities in groups to practice them.
              </p>
              {/* <button>Book Now!</button> */}
            </section>
            <section className="justXSections justSpeakSection">
              <img id="middleStar" src={homeImg.middleStar} alt="" />
              <img id="middleDots" src={homeImg.middleDots} alt="" />
              <img
                className="justBubbles"
                src={homeImg.speakBubble}
                alt="Speak speech bubble"
              />
              <h3>Just Speak!</h3>
              <p>
                Practice speaking about common topics and get lots of feedback
                on your pronunciation, grammar, and vocabulary.{" "}
              </p>
              {/* <button>Book Now!</button> */}
            </section>
            <section className="justXSections justVocabSection">
              <img id="rightStar" src={homeImg.rightStar} alt="" />
              <img id="rightDots" src={homeImg.rightDots} alt="" />
              <img
                className="justBubbles"
                src={homeImg.vocabBubble}
                alt="Vocabulary speech bubble"
              />
              <h3>Just Vocabulary!</h3>
              <p>
                Increase your vocabulary with new words. Complete with exercises
                and feedback every lesson to make sure you get it right.
              </p>
              {/* <button>Book Now!</button> */}
            </section>
          </section>
        </section>

        <section id="soloOrGroupSection">
          <section id="oneToOneSection">
            <img id="eclipse1" src={homeImg.eclipse1} alt="" />
            <img
              id="oneToOneImg"
              className="soloOrGroupImgs"
              src={homeImg.oneToOneImg}
              alt=""
            />
            <article id="oneToOneInfo">
              <div id="oneToOneContainer">
                <img
                  id="oneToOneSquiggle"
                  src={homeImg.oneToOneSquiggle}
                  alt=""
                />
                <h2 id="oneToOneTitle">One to one</h2>
                <p id="oneToOneParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
                <button className="lessonButtons heroButton2">
                  Book a lesson
                </button>
                <button className="lessonButtons heroButton1">
                  Find out more
                </button>
              </div>
            </article>
          </section>
          <section id="groupSection">
            <article id="groupInfo">
              <div id="groupContainer">
                <h2 id="groupTitle">In a group</h2>
                <p id="groupParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
                <button className="lessonButtons heroButton2">
                  Book a lesson
                </button>
                <button className="lessonButtons heroButton1">
                  Find out more
                </button>
              </div>
            </article>
            <img
              id="groupImg"
              className="soloOrGroupImgs"
              src={homeImg.groupImg}
              alt=""
            />
            <img id="groupSquiggle" src={homeImg.groupSquiggle} alt="" />
            <img id="eclipse2" src={homeImg.eclipse2} alt="" />
          </section>
        </section>

        <section id="reviewsSection">
          <Carousel data-bs-theme="dark">
            <Carousel.Item></Carousel.Item>
          </Carousel>
          {/* {homeImg.reviewsArray.map((review) => {
            console.log(review);
            return <img src={review} />;
          })} */}
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
