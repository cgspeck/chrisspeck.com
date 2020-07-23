import React from "react"
import { Helmet } from "react-helmet"

import DynamicTopMenu from "../components/dynamicTopMenu"

export default function Layout(props) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem` }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <link
          rel="canonical"
          href={`https://www.chrisspeck.com${props.slug}`}
        />
      </Helmet>
      <header style={{ marginBottom: `1.5rem` }}>
        <h1>Chris Speck</h1>
        <DynamicTopMenu />
        <hr style={{ marginTop: `1rem` }} />
      </header>
      {props.children}
    </div>
  )
}
