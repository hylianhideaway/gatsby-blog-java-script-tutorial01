import * as React from 'react'
import { Link } from 'gatsby'


// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to={"/"}>Back to Home</Link> {/*Linking to index (home page only requies a '/' ) */}
      <p>Hi! I'm Serin. Your friendly neighborhood dragonborn Bard.
        I'm taking on this project as a chance to learn how to do React development in the wild.
        Previously, all of my experience with React has been with an Enterprise level applicaiton, where much of the actual setup was 
        cookie cutter and abstracted away. With this project, I can expand my knowledge and apply it in a cool new way. 
      </p>
    </main>
  )
}

export const Head = () => {
    return <title>About Me</title>
}



// Step 3: Export your component
export default AboutPage