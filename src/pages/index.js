// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



// Step 2: Define your component
const IndexPage = () => {
  return (  
    <Layout pageTitle = "Welcome to my corner!">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Mia, a black and white lab mix, curled up on a couch cushion."
        src="../images/MiaCurled.jpg"
        layout="constrained"
      />
    </Layout>
  )
}


export const Head = () => {
    return (
    <title>Serin's Page</title>
    )
}

// Step 3: Export your component
export default IndexPage