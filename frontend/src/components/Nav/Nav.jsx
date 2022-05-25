import React from 'react'
import { Div, InsideDiv } from './styles'
import Link from 'next/link'

function Nav() {
  return (
    <Div>
        <h1>Blog website</h1>

        <InsideDiv>
          <Link href="/"><h1>Blogs</h1></Link>
          <Link href="/create"><h1>Create</h1></Link> 
        </InsideDiv>
    </Div>
  )
}

export default Nav