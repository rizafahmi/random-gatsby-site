import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ThirdPage = () => (
  <Layout>
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/page-2">Go back to page 2</Link>
  </Layout>
)

export default ThirdPage
