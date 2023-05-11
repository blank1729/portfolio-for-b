import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <hr />
      <Link href={"blog/ml-deployments"}>ML Deployments</Link>
    </div>
  )
}

export default Blog