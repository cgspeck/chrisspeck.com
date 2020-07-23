import React from "react"
import Layout from "../components/layout"

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
          <a href="https://matcalculator.chrisspeck.com/">
            Mat Board Calculator
          </a>
        </li>
        <li>
          Homebrewers'{" "}
          <a href="https://hopscalculator.chrisspeck.com/">
            Hop Aging Calculator
          </a>
        </li>
        <li>
          Multi-computer{" "}
          <a href="https://github.com/cgspeck/fg-orchestrator">
            launcher for FlighGear
          </a>
        </li>
        <li>
          A 3d printable{" "}
          <a href="https://github.com/cgspeck/etw">elevator trimtab</a> or{" "}
          <a href="https://www.thingiverse.com/thing:3021944">
            parametric cat food lid
          </a>
        </li>
      </ul>
      <p>If you wish to contact me, my email address is cgspeck at gmail.com</p>
      <p>You can also find me:</p>
      <ul>
        <li>
          on <a href="https://github.com/cgspeck">Github</a>
        </li>
        <li>
          on <a href="https://www.linkedin.com/in/cgspeck/">LinkedIn</a>
        </li>
        <li>
          on{" "}
          <a href="https://www.thingiverse.com/specky/designs">Thingiverse</a>
        </li>
      </ul>

      <p>
        Sometimes I add pages to this site and you may find the links to these
        above.
      </p>
    </Layout>
  )
}
