import React from "react"

import DynamicTopMenu from "../components/dynamicTopMenu"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <h1>Chris Speck</h1>
        <DynamicTopMenu />
        <hr style={{ marginTop: `1rem` }} />
      </header>
      {children}
    </div>
  )
}
