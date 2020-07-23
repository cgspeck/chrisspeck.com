import React from "react"
import { Link } from "gatsby"

import DynamicTopMenu from "../components/dynamicTopMenu"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1>Chris Speck</h1>
        </Link>
        <DynamicTopMenu />
        <hr style={{ marginTop: `1rem` }} />
      </header>
      {children}
    </div>
  )
}
