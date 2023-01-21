// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'


// Step 2: Define your component
const IndexPage = () => {
  return (  
    <Layout pageTitle = "Welcome to my corner!">
      <p>I'm making this by following the Gatsby Tutorial.</p>
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