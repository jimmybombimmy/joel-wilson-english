import "./Introduction.css";
import "../../App.css"

import {
  reviewsArrayFirstHalf,
  reviewsArraySecondHalf,
  reviewsArray
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
        <section id="introTestemonialsLarge" className="hideBelow991" >
          <ImageFlash imgArray={reviewsArrayFirstHalf} imgOnBottom={true} imgMove={true} hideClass={""}/>
          <ImageFlash imgArray={reviewsArraySecondHalf} imgOnBottom={false} imgMove={true} hideClass={""}/>
        </section>

        <section id="introTestemonialsSmall" className="hideAbove992">
          <ImageFlash imgArray={reviewsArrayFirstHalf} imgOnBottom={false} imgMove={false} hideClass={""}/>
          <ImageFlash imgArray={reviewsArraySecondHalf} imgOnBottom={false} imgMove={false} hideClass={"hideBelow575"}/>
        </section>
      </div>
    </section>
  );
}
