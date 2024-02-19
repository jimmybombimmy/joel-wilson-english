import "./AboutBottom.css";
import "../../App.css"

export default function AboutBottom() {
  return (
    <section id="aboutBottomSection">
      <div id="aboutBottomInner">
        <h2 id="aboutBottomTitle">My Classes</h2>
        <div>
          <p>
            I offer both fully personalised English lessons and also group
            classes of up to 7 people.
          </p>
          <p>
            All of my services can be found on my website: <a className="aboutBottomAnchors" href="http://www.joelwilson.as.me">www.joelwilson.as.me</a>
          </p>
          <p>A <span style={{color: "red"}}>30-minute trial</span> is available on request!</p>
        </div>
        <hr className="aboutBottomHR" />
        <div>
          <p>
            I also upload guides and materials to my YouTube channel and my
            Instagram:
          </p>
          <p>
            <strong>YouTube:</strong>{" "}
            <a className="aboutBottomAnchors" href="https://www.youtube.com/@JoelEdwardIanWilson/videos" target="blank">
              @JoelEdwardIanWilson
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a className="aboutBottomAnchors" href="https://www.instagram.com/joel.edward.ian.wilson/" target="blank">
              joel.edward.ian.wilson
            </a>
          </p>
          <p>
            <strong>TikTok:</strong>{" "}
            <a className="aboutBottomAnchors" href="https://www.tiktok.com/@joel.edward.ian.wilson" target="blank">
              joel.edward.ian.wilson
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
