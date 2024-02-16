import AboutIntro from "./AboutIntro/AboutIntro";
import AboutMethod from "./AboutMethod/AboutMethod";
import AboutBottom from "./AboutBottom/AboutBottom";

export default function About() {
  return (
    <main id="aboutPage">
      <AboutIntro />
      <AboutMethod />
      <AboutBottom />
    </main>
  )
}