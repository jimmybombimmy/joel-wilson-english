import booksWithArms from "../../img/books-with-arms.jpg"
import { Button } from "react-bootstrap"

function BlogBox({num}) {
  console.log(num)
  return (
    <section className="blogBox">
      <h3>Blog post {num}</h3>
      <img className="blogBoxImg" src={booksWithArms}></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita necessitatibus aut doloremque officiis quas reprehenderit laborum, nihil aliquam, suscipit, beatae perspiciatis voluptatibus accusamus et dolore?</p>
      <Button>Read article</Button>
    </section>
  )
}

export default BlogBox