import React from "react"

import Layout from "../components/layout"

import ExternalLink from "../components/externalLink"

export default function Home() {
  return (
    <Layout>
      <h2>Hello!</h2>
      <p>
        My name is Chris, I am a software engineer and a man of many hobbies
        living in Melbourne, Australia.
      </p>
      <p>You may be interested in the following tools I've published:</p>
      <ul>
        <li>
          Photographers'{" "}
          <ExternalLink url="https://matcalculator.chrisspeck.com/">
            Mat Board Calculator
          </ExternalLink>
        </li>
        <li>
          Homebrewers'{" "}
          <ExternalLink url="https://hopscalculator.chrisspeck.com/">
            Hop Aging Calculator
          </ExternalLink>
        </li>
        <li>
          Multi-computer{" "}
          <ExternalLink url="https://github.com/cgspeck/fg-orchestrator">
            launcher for FlighGear
          </ExternalLink>
        </li>
        <li>
          A 3d printable{" "}
          <ExternalLink url="https://github.com/cgspeck/etw">
            elevator trimtab
          </ExternalLink>{" "}
          or{" "}
          <ExternalLink url="https://www.thingiverse.com/thing:3021944">
            parametric cat food lid
          </ExternalLink>
        </li>
      </ul>
      <p>Some interesting projects I'm working on that are in progress:</p>
      <ul>
        <li>
          a wifi-controllable{" "}
          <ExternalLink url="https://github.com/cgspeck/barndoor-tracker-pi">
            Raspberry Pi + Arduino astro-photography tracker
          </ExternalLink>{" "}
          with align-assist, dew controller and intervalometer
        </li>
      </ul>
      <p>If you wish to contact me, my email address is cgspeck at gmail.com</p>
      <p>You can also find me:</p>
      <ul>
        <li>
          on{" "}
          <ExternalLink url="https://github.com/cgspeck">Github</ExternalLink>
        </li>
        <li>
          on{" "}
          <ExternalLink url="https://www.linkedin.com/in/cgspeck/">
            LinkedIn
          </ExternalLink>
        </li>
        <li>
          on{" "}
          <ExternalLink url="https://www.thingiverse.com/specky/designs">
            Thingiverse
          </ExternalLink>
        </li>
      </ul>

      <p>
        Sometimes I add pages to this site and you may find the links to these
        above.
      </p>
    </Layout>
  )
}
