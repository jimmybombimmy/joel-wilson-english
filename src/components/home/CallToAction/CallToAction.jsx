import "./CallToAction.css";
import { michaelFranks } from "../../../assets/home/home-images";

export default function CallToAction() {
  return (
    <>
      <section id="callToActionSection">
        <div id="callToActionLeft">
          <h1 id="callToActionTitle">Ready to get started?</h1>
          <h2 id="callToActionText">
            Book a lesson today to get you real good at being proud to be
            British son.
          </h2>
          <a href="https://joelwilson.as.me/schedule.php">
            <button id="callToActionBookButton" className="callToActionButtons">
              Book a lesson
            </button>
          </a>
          <a href="/about">
            <button id="callToActionInfoButton" className="callToActionButtons">
              Find out more
            </button>
          </a>
        </div>
        <img
          id="callToActionImg"
          className="hideBelow991"
          src={michaelFranks}
          alt=""
        />
      </section>
      <section id="footerIntoCTA"></section>
    </>
  );
}
