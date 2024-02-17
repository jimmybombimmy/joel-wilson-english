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
            All of my services can be found on my website: <a href="www.joelwilson.as.me">www.joelwilson.as.me</a>
          </p>
          <p>A <span style={{color: "#C1688A"}}>30-minute trial</span> is available on request!</p>
        </div>
        <hr className="aboutBottomHR" />
        <div>
          <p>
            I also upload guides and materials to my YouTube channel and my
            Instagram:
          </p>
          <p>
            <strong>YouTube:</strong>{" "}
            <a href="https://www.youtube.com/@JoelEdwardIanWilson/videos">
              @JoelEdwardIanWilson
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a href="https://www.instagram.com/joel.edward.ian.wilson/">
              joel.edward.ian.wilson
            </a>
          </p>
          <p>
            <strong>TikTok:</strong>{" "}
            <a href="https://www.tiktok.com/@joel.edward.ian.wilson">
              joel.edward.ian.wilson
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
