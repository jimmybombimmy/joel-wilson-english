import "./Footer.css";
import socialMediaImages from "../../assets/social-media/social-media-images";

export default function Footer() {
  console.log(socialMediaImages);

  return (
    <footer id="footerSection">
      <div>
        <ul className="footerList">
          <h3>Joel Wilson English</h3>
          <li>Privacy Policy</li>
          <li>
            Designed by James Peters
            <br />
            All rights reserved
          </li>
        </ul>
      </div>
      <div>
        <ul className="footerList">
          <h3>Home</h3>
          <li>Home</li>
          <li>About us</li>
          <li>Our Process</li>
          <li>Services</li>
        </ul>
      </div>
      <div>
        <ul className="footerList">
          <h3>Articles</h3>
          <li>Learning Materials</li>
          <li>Blog</li>
          <li>Guide to English</li>
        </ul>
      </div>
      <div>
        <ul className="footerList">
          <h3>Stay Connected</h3>
          {socialMediaImages.map((social) => {
            return (
              <li className="social">
                <img className="socialLink" src={social.link} alt="" />
                <span className="socialName">{social.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
