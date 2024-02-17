import { undrawSketching } from "../../assets/page-in-progress/page-in-progress-images"
import "./PageInProgress.css"

export default function PageInProgress() {
  return (<main id="pageInProgress">
    <h1>Sorry... This page isn't ready yet.</h1>
    <img src={undrawSketching} alt="Illustration of someone sketching on a computer" />
    <h2>Don't worry. It will be soon! 👍</h2>
  </main>)
}