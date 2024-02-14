import "./Introduction.css";
import {
  reviewsArrayFirstHalf,
  reviewsArraySecondHalf,
} from "../../../assets/home/home-images";
import ImageFlash from "./ImageFlash/ImageFlash";

export default function Introduction() {
  return (
    <section id="introSection">
      <div id="introInner">
        <article id="introInfo">
          <h1 id="introTitle">Hello everyone!</h1>
          <div id="introParagraphs">
            <p>
              I'm Joel - an English language teacher, editor, and proofreader
              with bags of enthusiasm and experience.
            </p>
            <p>
              Not only do I have a master’s degree in English and a CELTA
              teaching qualification, but I also have over 9 years of experience
              in language teaching and proofreading.
            </p>
            <p>
              I’m a well-rounded professional teacher and linguist with a
              passion for my work.
            </p>
            <p>
              I take great joy in teaching and designing classes for my
              students.
            </p>
          </div>
        </article>
        <section id="introTestemonials">
          <ImageFlash imgArray={reviewsArrayFirstHalf} imgOnBottom={true}/>
          <ImageFlash imgArray={reviewsArraySecondHalf} imgOnBottom={false}/>
        </section>
      </div>
    </section>
  );
}
